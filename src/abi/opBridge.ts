import * as ethers from 'ethers';
import { LogEvent, Func, ContractBase } from './abi.support';
import { ABI_JSON } from './opBridge.abi';

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
  ERC20BridgeFinalized: new LogEvent<
    [
      localToken: string,
      remoteToken: string,
      from: string,
      to: string,
      amount: bigint,
      extraData: string
    ] & {
      localToken: string;
      remoteToken: string;
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0xd59c65b35445225835c83f50b6ede06a7be047d22e357073e250d9af537518cd'),
  ERC20BridgeInitiated: new LogEvent<
    [
      localToken: string,
      remoteToken: string,
      from: string,
      to: string,
      amount: bigint,
      extraData: string
    ] & {
      localToken: string;
      remoteToken: string;
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0x7ff126db8024424bbfd9826e8ab82ff59136289ea440b04b39a0df1b03b9cabf'),
  ERC20DepositInitiated: new LogEvent<
    [
      l1Token: string,
      l2Token: string,
      from: string,
      to: string,
      amount: bigint,
      extraData: string
    ] & {
      l1Token: string;
      l2Token: string;
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0x718594027abd4eaed59f95162563e0cc6d0e8d5b86b1c7be8b1b0ac3343d0396'),
  ERC20WithdrawalFinalized: new LogEvent<
    [
      l1Token: string,
      l2Token: string,
      from: string,
      to: string,
      amount: bigint,
      extraData: string
    ] & {
      l1Token: string;
      l2Token: string;
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0x3ceee06c1e37648fcbb6ed52e17b3e1f275a1f8c7b22a84b2b84732431e046b3'),
  ETHBridgeFinalized: new LogEvent<
    [from: string, to: string, amount: bigint, extraData: string] & {
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0x31b2166ff604fc5672ea5df08a78081d2bc6d746cadce880747f3643d819e83d'),
  ETHBridgeInitiated: new LogEvent<
    [from: string, to: string, amount: bigint, extraData: string] & {
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0x2849b43074093a05396b6f2a937dee8565b15a48a7b3d4bffb732a5017380af5'),
  ETHDepositInitiated: new LogEvent<
    [from: string, to: string, amount: bigint, extraData: string] & {
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0x35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f23'),
  ETHWithdrawalFinalized: new LogEvent<
    [from: string, to: string, amount: bigint, extraData: string] & {
      from: string;
      to: string;
      amount: bigint;
      extraData: string;
    }
  >(abi, '0x2ac69ee804d9a7a0984249f508dfab7cb2534b465b6ce1580f99a38ba9c5e631'),
};

export const functions = {
  MESSENGER: new Func<[], {}, string>(abi, '0x927ede2d'),
  OTHER_BRIDGE: new Func<[], {}, string>(abi, '0x7f46ddb2'),
  bridgeERC20: new Func<
    [
      _localToken: string,
      _remoteToken: string,
      _amount: bigint,
      _minGasLimit: number,
      _extraData: string
    ],
    {
      _localToken: string;
      _remoteToken: string;
      _amount: bigint;
      _minGasLimit: number;
      _extraData: string;
    },
    []
  >(abi, '0x87087623'),
  bridgeERC20To: new Func<
    [
      _localToken: string,
      _remoteToken: string,
      _to: string,
      _amount: bigint,
      _minGasLimit: number,
      _extraData: string
    ],
    {
      _localToken: string;
      _remoteToken: string;
      _to: string;
      _amount: bigint;
      _minGasLimit: number;
      _extraData: string;
    },
    []
  >(abi, '0x540abf73'),
  bridgeETH: new Func<
    [_minGasLimit: number, _extraData: string],
    { _minGasLimit: number; _extraData: string },
    []
  >(abi, '0x09fc8843'),
  bridgeETHTo: new Func<
    [_to: string, _minGasLimit: number, _extraData: string],
    { _to: string; _minGasLimit: number; _extraData: string },
    []
  >(abi, '0xe11013dd'),
  depositERC20: new Func<
    [
      _l1Token: string,
      _l2Token: string,
      _amount: bigint,
      _minGasLimit: number,
      _extraData: string
    ],
    {
      _l1Token: string;
      _l2Token: string;
      _amount: bigint;
      _minGasLimit: number;
      _extraData: string;
    },
    []
  >(abi, '0x58a997f6'),
  depositERC20To: new Func<
    [
      _l1Token: string,
      _l2Token: string,
      _to: string,
      _amount: bigint,
      _minGasLimit: number,
      _extraData: string
    ],
    {
      _l1Token: string;
      _l2Token: string;
      _to: string;
      _amount: bigint;
      _minGasLimit: number;
      _extraData: string;
    },
    []
  >(abi, '0x838b2520'),
  depositETH: new Func<
    [_minGasLimit: number, _extraData: string],
    { _minGasLimit: number; _extraData: string },
    []
  >(abi, '0xb1a1a882'),
  depositETHTo: new Func<
    [_to: string, _minGasLimit: number, _extraData: string],
    { _to: string; _minGasLimit: number; _extraData: string },
    []
  >(abi, '0x9a2ac6d5'),
  deposits: new Func<[_: string, _: string], {}, bigint>(abi, '0x8f601f66'),
  finalizeBridgeERC20: new Func<
    [
      _localToken: string,
      _remoteToken: string,
      _from: string,
      _to: string,
      _amount: bigint,
      _extraData: string
    ],
    {
      _localToken: string;
      _remoteToken: string;
      _from: string;
      _to: string;
      _amount: bigint;
      _extraData: string;
    },
    []
  >(abi, '0x0166a07a'),
  finalizeBridgeETH: new Func<
    [_from: string, _to: string, _amount: bigint, _extraData: string],
    { _from: string; _to: string; _amount: bigint; _extraData: string },
    []
  >(abi, '0x1635f5fd'),
  finalizeERC20Withdrawal: new Func<
    [
      _l1Token: string,
      _l2Token: string,
      _from: string,
      _to: string,
      _amount: bigint,
      _extraData: string
    ],
    {
      _l1Token: string;
      _l2Token: string;
      _from: string;
      _to: string;
      _amount: bigint;
      _extraData: string;
    },
    []
  >(abi, '0xa9f9e675'),
  finalizeETHWithdrawal: new Func<
    [_from: string, _to: string, _amount: bigint, _extraData: string],
    { _from: string; _to: string; _amount: bigint; _extraData: string },
    []
  >(abi, '0x1532ec34'),
  l2TokenBridge: new Func<[], {}, string>(abi, '0x91c49bf8'),
  messenger: new Func<[], {}, string>(abi, '0x3cb747bf'),
  version: new Func<[], {}, string>(abi, '0x54fd4d50'),
};

export class Contract extends ContractBase {
  MESSENGER(): Promise<string> {
    return this.eth_call(functions.MESSENGER, []);
  }

  OTHER_BRIDGE(): Promise<string> {
    return this.eth_call(functions.OTHER_BRIDGE, []);
  }

  deposits(arg0: string, arg1: string): Promise<bigint> {
    return this.eth_call(functions.deposits, [arg0, arg1]);
  }

  l2TokenBridge(): Promise<string> {
    return this.eth_call(functions.l2TokenBridge, []);
  }

  messenger(): Promise<string> {
    return this.eth_call(functions.messenger, []);
  }

  version(): Promise<string> {
    return this.eth_call(functions.version, []);
  }
}
