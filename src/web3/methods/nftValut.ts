import { Web3Util } from "../web3-util";

export function fungiblize(address: string, tokenId: string): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wrap",
    params: [address, tokenId]
  });
}

export function unwrap(_wnftId: any, _nftId: any): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "unwrap",
    params: [_wnftId, _nftId]
  });
}

export function wnftIds(address: string): Promise<string> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnftIds",
    params: [address]
  });
}

export function wrappedNfts(nftId: string): Promise<{
  nftAddr: string;
  tokenId: string;
  inVault: boolean;
}> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wrappedNfts",
    params: [nftId]
  });
}

export function wnfts(wnftId: string): Promise<{
  nftAddr: string;
  wnftAddr: string;
}> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnfts",
    params: [wnftId]
  });
}

export function nftsInWnft(_wnftId: string): Promise<string[]> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "nftsInWnft",
    params: [_wnftId]
  });
}

export function feeManager(): Promise<string> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "feeManager"
  });
}

export async function getWNFTByCollectionAddr(
  collectionAddr: string
): Promise<string> {
  const wnftId = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnftIds",
    params: [collectionAddr]
  });
  const wnftInfo = await Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnfts",
    params: [wnftId]
  });
  return wnftInfo.wnftAddr;
}
