import { mainnetProcessor } from './processor';
import { EthDeposit, Bridge } from '../model';
import * as beaconAbi from '../abi/beaconDeposit';
import * as bridgeAbi from '../abi/opBridge';

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
        if (
          log.topics[0] &&
          log.topics[0]?.toLowerCase() ===
            bridgeAbi.events.ERC20DepositInitiated.topic?.toLowerCase()
        ) {
          const eventData =
            bridgeAbi.events['ERC20DepositInitiated'].decode(log);

          ctx.store.save(
            new Bridge({
              id: `${log.transactionHash}-${log.logIndex}`,
              blockNumber: block.header.height,
              transactionHash: log.transactionHash,
              localToken: eventData.l1Token,
              remoteToken: eventData.l2Token,
              from: eventData.from,
              to: eventData.to,
              amount: eventData.amount,
              eventType: 'ERC20DepositInitiated',
            })
          );
        }
        if (
          log.topics[0] &&
          log.topics[0].toLowerCase() ===
            bridgeAbi.events.ETHDepositInitiated.topic?.toLowerCase()
        ) {
          const eventData = bridgeAbi.events['ETHDepositInitiated'].decode(log);

          ctx.store.save(
            new Bridge({
              id: `${log.transactionHash}-${log.logIndex}`,
              blockNumber: block.header.height,
              transactionHash: log.transactionHash,
              localToken: 'ETH', // ETH doesn't have a token address, so we can leave this empty or put a placeholder
              remoteToken: 'ETH', // Same for the remoteToken, or you can have a logic to differentiate if needed
              from: eventData.from,
              to: eventData.to,
              amount: eventData.amount,
              eventType: 'ETHDepositInitiated',
            })
          );
        }
      }
    }
  }
);
