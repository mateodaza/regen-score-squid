import { DataHandlerContext } from '@subsquid/evm-processor';
import { Store } from '../db';
import { EntityBuffer } from '../entityBuffer';
import { Transfer } from '../model';
import * as spec from '../abi/op';
import { Log, Transaction } from '../processor';

const address = '0x4200000000000000000000000000000000000042';

export function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
  try {
    switch (log.topics[0]) {
      case spec.events['Transfer'].topic: {
        let e = spec.events['Transfer'].decode(log);
        EntityBuffer.add(
          new Transfer({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transactionHash,
            eventName: 'Transfer',
            from: e[0],
            to: e[1],
            value: e[2],
          })
        );
        break;
      }
    }
  } catch (error) {
    ctx.log.error(
      {
        error,
        blockNumber: log.block.height,
        blockHash: log.block.hash,
        address,
      },
      `Unable to decode event "${log.topics[0]}"`
    );
  }
}

export function parseFunction(
  ctx: DataHandlerContext<Store>,
  transaction: Transaction
) {
  try {
    switch (transaction.input.slice(0, 10)) {
    }
  } catch (error) {
    ctx.log.error(
      {
        error,
        blockNumber: transaction.block.height,
        blockHash: transaction.block.hash,
        address,
      },
      `Unable to decode function "${transaction.input.slice(0, 10)}"`
    );
  }
}
