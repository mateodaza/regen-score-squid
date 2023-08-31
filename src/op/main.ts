import { normalizeEthereumAddress } from '../utils';
import { optimismProcessor } from './processor';
import { Transfer, Delegate } from '../model';
import * as opc from '../abi/op';

import { TypeormDatabase } from '@subsquid/typeorm-store';

const OP_TOKEN_ADDRESS = '0x4200000000000000000000000000000000000042';
const OP_TREASURY = '0x2501c477d0a35545a387aa4a3eee4292a9a8b3f0';

optimismProcessor.run(
  new TypeormDatabase({
    supportHotBlocks: false,
    stateSchema: 'op_processor',
  }),
  async (ctx) => {
    let transfers: Transfer[] = [];

    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        if (log.topics[0] === opc.events.Transfer.topic) {
          if (log.address === OP_TOKEN_ADDRESS) {
            let { from, to } = opc.events.Transfer.decode(log);
            if (normalizeEthereumAddress(log.topics[1]) === OP_TREASURY) {
              transfers.push(
                new Transfer({
                  id: log.id,
                  from,
                  to,
                  value: BigInt(log.data),
                  blockNumber: block.header.height,
                  transactionHash: log.transactionHash,
                  description: 'Treasury',
                })
              );
            }
          }

          // Process DelegateVotesChanged event
        } else if (log.topics[0] === opc.events.DelegateVotesChanged.topic) {
          let { delegate, newBalance } =
            opc.events.DelegateVotesChanged.decode(log);

          const normalizedAddress = normalizeEthereumAddress(delegate);
          // Check if delegate with the address already exists
          const existingDelegate = await ctx.store.get(Delegate, {
            where: { address: normalizedAddress },
          });

          if (existingDelegate) {
            // If delegate exists, update the balance
            existingDelegate.balance = newBalance;
            await ctx.store.save(existingDelegate);
          } else {
            // If delegate doesn't exist, create a new one
            ctx.store.save(
              new Delegate({
                id: `${normalizedAddress}`,
                address: normalizedAddress,
                balance: newBalance,
              })
            );
          }
        }
      }
    }

    await ctx.store.insert(transfers);
  }
);
