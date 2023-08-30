import {
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  BlockHeader,
  Log as _Log,
  Transaction as _Transaction,
} from '@subsquid/evm-processor';
import { lookupArchive } from '@subsquid/archive-registry';
import * as contractAbi from './abi/op';

const OP_TOKEN_ADDRESS = '0x4200000000000000000000000000000000000042';

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive('optimism-mainnet', { type: 'EVM' }),
  })
  .setBlockRange({
    // from: 73220860,
    from: 108000000,
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
    address: [OP_TOKEN_ADDRESS],
    topic0: [contractAbi.events['Transfer'].topic],
  })
  .addLog({
    address: [OP_TOKEN_ADDRESS],
    topic0: [contractAbi.events['DelegateVotesChanged'].topic],
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
