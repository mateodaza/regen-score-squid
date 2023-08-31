import {
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  BlockHeader,
  Log as _Log,
  Transaction as _Transaction,
} from '@subsquid/evm-processor';
import { lookupArchive } from '@subsquid/archive-registry';
import * as contractAbi from '../abi/beaconDeposit';

const BEACON_DEPOSIT = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

export const mainnetProcessor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive('eth-mainnet', { type: 'EVM' }),
  })
  .setBlockRange({
    from: 1_052_984, // Beacon genesis
  })
  .setFields({
    log: {
      topics: true,
      data: true,
      transactionHash: true,
    },
    transaction: {
      hash: true,
      input: true,
      from: true,
      value: true,
      status: true,
    },
  })
  .addLog({
    address: [BEACON_DEPOSIT],
    topic0: [contractAbi.events['DepositEvent'].topic],
  })
  .addTransaction({
    to: [BEACON_DEPOSIT],
  });

export type Fields = EvmBatchProcessorFields<typeof mainnetProcessor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
