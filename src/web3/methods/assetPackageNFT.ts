import { whitelistSignature } from "@/api";
import { Web3Util } from "../web3-util";

export async function packageMint(
  assetInfo: any[],
  callAddress: string
): Promise<string> {
  const { data } = await whitelistSignature();
  console.log(data);
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("AssetPackageNFTV2") || [],
    callAddress: callAddress,
    method: "wrap",
    params: [assetInfo, data]
  });
}

export async function packageUnwarp(
  tokenId: string,
  callAddress: string
): Promise<string> {
  const { data } = await whitelistSignature();
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("AssetPackageNFTV2") || [],
    callAddress: callAddress,
    method: "unwrap",
    params: [tokenId, data]
  });
}

export function getFee(tokenId: string, callAddress: string): Promise<string> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("AssetPackageNFT") || [],
    callAddress: callAddress,
    method: "_getFee",
    params: [tokenId]
  });
}

export async function depositMethod(
  tokenId: string,
  callAddress: string,
  stakeId: string,
  stakeCategory: string
): Promise<string> {
  const { data } = await whitelistSignature();
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("AssetPackageNFTV2") || [],
    callAddress: callAddress,
    method: "stake",
    params: [tokenId, stakeId, stakeCategory, data]
  });
}

export function assetPackageApprove(
  to: string,
  tokenId: string,
  callAddress: string
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("AssetPackageNFTV2") || [],
    callAddress: callAddress,
    method: "approve",
    params: [to, tokenId]
  });
}

export function withdraw(
  tokenId: string,
  callAddress: string,
  account: string
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("AssetPackageNFTV2") || [],
    callAddress: callAddress,
    method: "unStake",
    params: [tokenId, account]
  });
}

export function totalReward(callAddress: string): Promise<string> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("AssetPackageNFT") || [],
    callAddress: callAddress,
    method: "_totalReward",
    params: []
  });
}

export function claimAll(
  tokenId: string[],
  callAddress: string
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("AssetPackageNFT") || [],
    callAddress: callAddress,
    method: "claimAll",
    params: [tokenId]
  });
}
