import * as ethers from 'ethers';
import { LogEvent, Func, ContractBase } from './abi.support';
import { ABI_JSON } from './op.abi';

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
  Approval: new LogEvent<
    [owner: string, spender: string, value: bigint] & {
      owner: string;
      spender: string;
      value: bigint;
    }
  >(abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'),
  DelegateChanged: new LogEvent<
    [delegator: string, fromDelegate: string, toDelegate: string] & {
      delegator: string;
      fromDelegate: string;
      toDelegate: string;
    }
  >(abi, '0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f'),
  DelegateVotesChanged: new LogEvent<
    [delegate: string, previousBalance: bigint, newBalance: bigint] & {
      delegate: string;
      previousBalance: bigint;
      newBalance: bigint;
    }
  >(abi, '0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724'),
  OwnershipTransferred: new LogEvent<
    [previousOwner: string, newOwner: string] & {
      previousOwner: string;
      newOwner: string;
    }
  >(abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'),
  Transfer: new LogEvent<
    [from: string, to: string, value: bigint] & {
      from: string;
      to: string;
      value: bigint;
    }
  >(abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'),
};

export const functions = {
  DOMAIN_SEPARATOR: new Func<[], {}, string>(abi, '0x3644e515'),
  allowance: new Func<
    [owner: string, spender: string],
    { owner: string; spender: string },
    bigint
  >(abi, '0xdd62ed3e'),
  approve: new Func<
    [spender: string, amount: bigint],
    { spender: string; amount: bigint },
    boolean
  >(abi, '0x095ea7b3'),
  balanceOf: new Func<[account: string], { account: string }, bigint>(
    abi,
    '0x70a08231'
  ),
  burn: new Func<[amount: bigint], { amount: bigint }, []>(abi, '0x42966c68'),
  burnFrom: new Func<
    [account: string, amount: bigint],
    { account: string; amount: bigint },
    []
  >(abi, '0x79cc6790'),
  checkpoints: new Func<
    [account: string, pos: number],
    { account: string; pos: number },
    [fromBlock: number, votes: bigint] & { fromBlock: number; votes: bigint }
  >(abi, '0xf1127ed8'),
  decimals: new Func<[], {}, number>(abi, '0x313ce567'),
  decreaseAllowance: new Func<
    [spender: string, subtractedValue: bigint],
    { spender: string; subtractedValue: bigint },
    boolean
  >(abi, '0xa457c2d7'),
  delegate: new Func<[delegatee: string], { delegatee: string }, []>(
    abi,
    '0x5c19a95c'
  ),
  delegateBySig: new Func<
    [
      delegatee: string,
      nonce: bigint,
      expiry: bigint,
      v: number,
      r: string,
      s: string
    ],
    {
      delegatee: string;
      nonce: bigint;
      expiry: bigint;
      v: number;
      r: string;
      s: string;
    },
    []
  >(abi, '0xc3cda520'),
  delegates: new Func<[account: string], { account: string }, string>(
    abi,
    '0x587cde1e'
  ),
  getPastTotalSupply: new Func<
    [blockNumber: bigint],
    { blockNumber: bigint },
    bigint
  >(abi, '0x8e539e8c'),
  getPastVotes: new Func<
    [account: string, blockNumber: bigint],
    { account: string; blockNumber: bigint },
    bigint
  >(abi, '0x3a46b1a8'),
  getVotes: new Func<[account: string], { account: string }, bigint>(
    abi,
    '0x9ab24eb0'
  ),
  increaseAllowance: new Func<
    [spender: string, addedValue: bigint],
    { spender: string; addedValue: bigint },
    boolean
  >(abi, '0x39509351'),
  mint: new Func<
    [_account: string, _amount: bigint],
    { _account: string; _amount: bigint },
    []
  >(abi, '0x40c10f19'),
  name: new Func<[], {}, string>(abi, '0x06fdde03'),
  nonces: new Func<[owner: string], { owner: string }, bigint>(
    abi,
    '0x7ecebe00'
  ),
  numCheckpoints: new Func<[account: string], { account: string }, number>(
    abi,
    '0x6fcfff45'
  ),
  owner: new Func<[], {}, string>(abi, '0x8da5cb5b'),
  permit: new Func<
    [
      owner: string,
      spender: string,
      value: bigint,
      deadline: bigint,
      v: number,
      r: string,
      s: string
    ],
    {
      owner: string;
      spender: string;
      value: bigint;
      deadline: bigint;
      v: number;
      r: string;
      s: string;
    },
    []
  >(abi, '0xd505accf'),
  renounceOwnership: new Func<[], {}, []>(abi, '0x715018a6'),
  symbol: new Func<[], {}, string>(abi, '0x95d89b41'),
  totalSupply: new Func<[], {}, bigint>(abi, '0x18160ddd'),
  transfer: new Func<
    [to: string, amount: bigint],
    { to: string; amount: bigint },
    boolean
  >(abi, '0xa9059cbb'),
  transferFrom: new Func<
    [from: string, to: string, amount: bigint],
    { from: string; to: string; amount: bigint },
    boolean
  >(abi, '0x23b872dd'),
  transferOwnership: new Func<[newOwner: string], { newOwner: string }, []>(
    abi,
    '0xf2fde38b'
  ),
};

export class Contract extends ContractBase {
  DOMAIN_SEPARATOR(): Promise<string> {
    return this.eth_call(functions.DOMAIN_SEPARATOR, []);
  }

  allowance(owner: string, spender: string): Promise<bigint> {
    return this.eth_call(functions.allowance, [owner, spender]);
  }

  balanceOf(account: string): Promise<bigint> {
    return this.eth_call(functions.balanceOf, [account]);
  }

  checkpoints(
    account: string,
    pos: number
  ): Promise<
    [fromBlock: number, votes: bigint] & { fromBlock: number; votes: bigint }
  > {
    return this.eth_call(functions.checkpoints, [account, pos]);
  }

  decimals(): Promise<number> {
    return this.eth_call(functions.decimals, []);
  }

  delegates(account: string): Promise<string> {
    return this.eth_call(functions.delegates, [account]);
  }

  getPastTotalSupply(blockNumber: bigint): Promise<bigint> {
    return this.eth_call(functions.getPastTotalSupply, [blockNumber]);
  }

  getPastVotes(account: string, blockNumber: bigint): Promise<bigint> {
    return this.eth_call(functions.getPastVotes, [account, blockNumber]);
  }

  getVotes(account: string): Promise<bigint> {
    return this.eth_call(functions.getVotes, [account]);
  }

  name(): Promise<string> {
    return this.eth_call(functions.name, []);
  }

  nonces(owner: string): Promise<bigint> {
    return this.eth_call(functions.nonces, [owner]);
  }

  numCheckpoints(account: string): Promise<number> {
    return this.eth_call(functions.numCheckpoints, [account]);
  }

  owner(): Promise<string> {
    return this.eth_call(functions.owner, []);
  }

  symbol(): Promise<string> {
    return this.eth_call(functions.symbol, []);
  }

  totalSupply(): Promise<bigint> {
    return this.eth_call(functions.totalSupply, []);
  }
}
