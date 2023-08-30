import { processor } from './processor';
import { db } from './db';
import { Transfer, Delegate, TokenBalance } from './model';
import * as opc from './abi/op';

function normalizeEthereumAddress(address: string): string {
  return '0x' + address.slice(-40);
}

const OP_TOKEN_ADDRESS = '0x4200000000000000000000000000000000000042';
const OP_TREASURY = '0x2501c477d0a35545a387aa4a3eee4292a9a8b3f0';

// A helper function to update user token balances
async function updateTokenBalance(address: string, change: BigInt, store: any) {
  const normalizedAddress = normalizeEthereumAddress(address);
  let balanceEntity = await store.get(TokenBalance, {
    where: { address: normalizedAddress },
  });

  if (!balanceEntity) {
    balanceEntity = new TokenBalance({
      id: normalizedAddress,
      address: normalizedAddress,
      balance: 0n,
      lastUpdated: new Date(),
    });
  }

  balanceEntity.balance += change;
  balanceEntity.lastUpdated = new Date();

  await store.save(balanceEntity);
}

processor.run(db, async (ctx) => {
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
                blockTimestamp: new Date(block.header.timestamp),
                blockNumber: block.header.height,
                transactionHash: log.transactionHash,
                eventName: 'Transfer',
                description: 'Treasury',
              })
            );
          } else {
            let { from, to } = opc.events.Transfer.decode(log);
            const transferValue = BigInt(log.data);
            await updateTokenBalance(from, -transferValue, ctx.store);
            await updateTokenBalance(to, transferValue, ctx.store);
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
});
