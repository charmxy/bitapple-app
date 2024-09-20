import { Web3Util, ZERO_ADDRESS, ZERO_ADDRESS_EEE } from "../web3-util";
import { BigNumber } from "@ethersproject/bignumber";
import { useWeb3Store } from "../use-web3-store";
import Web3 from "web3";
import { RPCS } from "../chains";

export async function getBalance(
  token: string,
  account: string,
  format = true
) {
  let balance;
  if (token === ZERO_ADDRESS) {
    balance = await Web3Util.web3.eth.getBalance(account);
  } else {
    balance = await Web3Util.execContractMethodCall({
      callAddress: token,
      callAbi: Web3Util.getContractAbi("ERC20") || [],
      method: "balanceOf",
      params: [account]
    });
  }
  return format ? Web3Util.formatUnits(balance) : balance;
}

export async function getChainRpc(chainId: string) {
  return RPCS[chainId];
}

export async function getBalanceRpc(
  token: string,
  account: string,
  chainId: string,
  decimals = "18"
) {
  if (!chainId) return 0;
  else {
    const web3 = new Web3(Web3.givenProvider);
    const rpc = await getChainRpc(chainId);
    web3.setProvider(rpc);
    const infc = new web3.eth.Contract(
      Web3Util.getContractAbi("ERC20") || [],
      token
    );
    let balance;
    if (token === ZERO_ADDRESS || token === ZERO_ADDRESS_EEE) {
      balance = await web3.eth.getBalance(account);
    } else {
      balance = await infc.methods.balanceOf(account).call({
        from: account
      });
    }
    return Web3Util.formatUnits(balance || 0, decimals);
  }
}

export async function getPricingTokensBalance(account: string): Promise<any> {
  const { pricingTokens } = Web3Util.getChainConfig();
  const tokensBalance: any = {};
  for (const tokenName in pricingTokens) {
    const element = pricingTokens[tokenName];
    let balance: string;
    if (element.address === ZERO_ADDRESS) {
      balance = await Web3Util.web3.eth.getBalance(account);
      balance = Web3Util.formatUnits(balance);
    } else {
      balance = await getBalance(element.address, account);
    }
    tokensBalance[tokenName] = balance;
  }
  return tokensBalance;
}

export async function getApproved(
  token: string,
  spender: string,
  minAllowance: BigNumber | string | number = 0
) {
  const allowance = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC20") || [],
    callAddress: token,
    method: "allowance",
    params: [useWeb3Store.getState().account, spender]
  });
  minAllowance = Web3Util.parseUnits(minAllowance.toString());
  return BigNumber.from(allowance).gte(minAllowance);
}

export async function checkApproved(
  token: string,
  spender: string,
  minAllowance: BigNumber | string | number = 0
) {
  const allowance = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC20") || [],
    callAddress: token,
    method: "allowance",
    params: [useWeb3Store.getState().account, spender]
  });
  if (BigNumber.from(allowance).lt(minAllowance)) {
    await approve(token, spender);
  }
}

export async function checkApprovedErc20(
  token: string,
  spender: string,
  minAllowance: BigNumber | string | number = 0
) {
  const allowance = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC20") || [],
    callAddress: token,
    method: "allowance",
    params: [useWeb3Store.getState().account, spender]
  });
  if (BigNumber.from(allowance).lt(minAllowance)) {
    return true;
  } else return false;
}

export function approve(
  token: string,
  spender: string,
  allowance:
    | BigNumber
    | string
    | number = "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
) {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("ERC20") || [],
    callAddress: token,
    method: "approve",
    params: [
      spender,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    ]
  });
}

export function symbol(token: string) {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC20") || [],
    callAddress: token,
    method: "symbol"
  });
}

export async function totalSupply(token: string): Promise<string> {
  let totalSupply = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC20") || [],
    callAddress: token,
    method: "totalSupply"
  });
  return Web3Util.formatUnits(totalSupply);
}
