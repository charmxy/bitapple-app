import BigNumber from "bignumber.js";
import { Web3Util, ZERO_ADDRESS } from "../web3-util";
import { symbol } from "./erc20";
import { getNftSymbol } from "./nft";
import { createEstimationContractModel } from "./utils";

export type WrapInfo = {
  fee: string;
  wnftSymbol: string;
};

export function fungiblizes(
  address: string[],
  tokenId: string[]
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("BatchProxy") || [],
    callAddress: Web3Util.getContractAddress("BatchProxy"),
    method: "batchWrap",
    params: [address, tokenId]
  });
}

export function fungiblize(address: string, tokenId: string): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wrap",
    params: [address, tokenId]
  });
}

export function ftIds(address: string): Promise<BigNumber> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnftIds",
    params: [address]
  });
}

export function fts(ftId: string): Promise<{
  nftAddr: string;
  wnftAddr: string;
}> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnfts",
    params: [ftId]
  });
}

export function redeem(ftId: string, nftId: string): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "unwrap",
    params: [ftId, nftId]
  });
}

export async function getWrapFee(wnftAddr: string): Promise<string> {
  if (!Web3Util.getContractAddress("FeeManager")) {
    return "0";
  }
  const fee = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("FeeManager") || [],
    callAddress: Web3Util.getContractAddress("FeeManager"),
    method: "wrapFee",
    params: [wnftAddr]
  });
  return Web3Util.formatUnits(fee);
}

export async function getUnwrapFee(wnftAddr: string): Promise<string> {
  if (!Web3Util.getContractAddress("FeeManager")) {
    return "0";
  }
  const fee = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("FeeManager") || [],
    callAddress: Web3Util.getContractAddress("FeeManager"),
    method: "unwrapFee",
    params: [wnftAddr]
  });
  return Web3Util.formatUnits(fee);
}

export async function getWrapInfo(nftAddr: string): Promise<WrapInfo> {
  let fee: string = "0";
  let wnftSymbol = "";
  const wnftId = await ftIds(nftAddr);
  const wnft = await fts(wnftId.toString());
  if (wnft.nftAddr !== ZERO_ADDRESS) {
    const feeManager = await Web3Util.execContractMethodCall({
      callAbi: Web3Util.getContractAbi("NftVault") || [],
      callAddress: Web3Util.getContractAddress("NftVault"),
      method: "feeManager"
    });
    wnftSymbol = await symbol(wnft.wnftAddr);
    if (feeManager === ZERO_ADDRESS) {
      fee = "0";
    } else {
      fee = await Web3Util.execContractMethodCall({
        callAbi: Web3Util.getContractAbi("FeeManager") || [],
        callAddress: Web3Util.getContractAddress("FeeManager"),
        method: "wrapFee",
        params: [wnft.wnftAddr]
      });
      fee = Web3Util.formatUnits(fee);
    }
  } else {
    fee = "0";
    const nftSymbol = await getNftSymbol(nftAddr);
    wnftSymbol = `w${nftSymbol}`;
  }
  return {
    fee,
    wnftSymbol
  };
}

export function getWNFTId(wnftAddr: string) {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnftAddrToId",
    params: [wnftAddr]
  });
}

export const estimateNFTVaultModel = createEstimationContractModel("NftVault");
export const estimateBatchProxyModel =
  createEstimationContractModel("BatchProxy");

export function estimateWrap(address: string, tokenId: string) {
  return estimateNFTVaultModel("wrap", [address, tokenId]);
}

export function estimateBatchWrap(address: string[], tokenId: string[]) {
  return estimateBatchProxyModel("batchWrap", [address, tokenId]);
}

export function estimateUnwrap(ftId: string, nftId: string) {
  return estimateNFTVaultModel("unwrap", [ftId, nftId]);
}
