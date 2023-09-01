import { mainnetProcessor } from './processor';
import { EthDeposit } from '../model';
import * as beaconAbi from '../abi/beaconDeposit';

import { TypeormDatabase } from '@subsquid/typeorm-store';

mainnetProcessor.run(
  new TypeormDatabase({
    supportHotBlocks: false,
    stateSchema: 'mainnet_processor',
  }),
  async (ctx) => {
    for (let block of ctx.blocks) {
      for (let log of block.logs) {
        if (log.topics[0] === beaconAbi.events.DepositEvent.topic) {
          // const eventData = beaconAbi.events['DepositEvent'].decode(log);
          const transaction = block.transactions.find(
            (tx) => tx.hash === log.transactionHash
          );
          const fromAddress = transaction ? transaction.from : '';

          ctx.store.save(
            new EthDeposit({
              id: `${log.transactionHash}-${log.logIndex}`,
              blockNumber: block.header.height,
              blockTimestamp: new Date(block.header.timestamp),
              transactionHash: log.transactionHash,
              from: fromAddress,
            })
          );
        }
      }
    }
  }
);
