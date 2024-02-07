import {
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  BlockHeader,
  Log as _Log,
  Transaction as _Transaction,
} from '@subsquid/evm-processor';
import { lookupArchive } from '@subsquid/archive-registry';
import * as contractAbi from '../abi/beaconDeposit';
import * as opBridgeAbi from '../abi/opBridge';

const BEACON_DEPOSIT = '0x00000000219ab540356cBB839Cbe05303d7705Fa';
const OPTIMISM_BRIDGE = '0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1';

export const mainnetProcessor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive('eth-mainnet', { type: 'EVM' }),
    chain: {
      url: "https://eth.meowrpc.com"
    }
  })
  .setBlockRange({
    // from: 16057388, // L1StandardBridge
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
  })
  .addLog({
    address: [OPTIMISM_BRIDGE],
    topic0: [opBridgeAbi.events['ERC20DepositInitiated'].topic],
  })
  .addLog({
    address: [OPTIMISM_BRIDGE],
    topic0: [opBridgeAbi.events['ETHDepositInitiated'].topic],
  });

export type Fields = EvmBatchProcessorFields<typeof mainnetProcessor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
