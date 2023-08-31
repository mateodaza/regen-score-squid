import * as ethers from 'ethers';
import { LogEvent, Func, ContractBase } from './abi.support';
import { ABI_JSON } from './beaconDeposit.abi';

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
  DepositEvent: new LogEvent<
    [
      pubkey: string,
      withdrawal_credentials: string,
      amount: string,
      signature: string,
      index: string
    ] & {
      pubkey: string;
      withdrawal_credentials: string;
      amount: string;
      signature: string;
      index: string;
    }
  >(abi, '0x649bbc62d0e31342afea4e5cd82d4049e7e1ee912fc0889aa790803be39038c5'),
};

export const functions = {
  deposit: new Func<
    [
      pubkey: string,
      withdrawal_credentials: string,
      signature: string,
      deposit_data_root: string
    ],
    {
      pubkey: string;
      withdrawal_credentials: string;
      signature: string;
      deposit_data_root: string;
    },
    []
  >(abi, '0x22895118'),
  get_deposit_count: new Func<[], {}, string>(abi, '0x621fd130'),
  get_deposit_root: new Func<[], {}, string>(abi, '0xc5f2892f'),
  supportsInterface: new Func<
    [interfaceId: string],
    { interfaceId: string },
    boolean
  >(abi, '0x01ffc9a7'),
};

export class Contract extends ContractBase {
  get_deposit_count(): Promise<string> {
    return this.eth_call(functions.get_deposit_count, []);
  }

  get_deposit_root(): Promise<string> {
    return this.eth_call(functions.get_deposit_root, []);
  }

  supportsInterface(interfaceId: string): Promise<boolean> {
    return this.eth_call(functions.supportsInterface, [interfaceId]);
  }
}
