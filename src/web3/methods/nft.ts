import { useWeb3Store } from "../use-web3-store";
import { Web3Util } from "../web3-util";

export type NftType = "ERC721" | "ERC1155";

export function getWNFTId(wnftAddr: string) {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("NftVault") || [],
    callAddress: Web3Util.getContractAddress("NftVault"),
    method: "wnftAddrToId",
    params: [wnftAddr]
  });
}

export function transfer(nftAddr: string, tokenId: string, receiver: string) {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    callAddress: nftAddr,
    method: "transferFrom",
    params: [useWeb3Store.getState().account, receiver, tokenId]
  });
}

export async function ownerOf(nftAddress: string, tokenId: string) {
  const approved = await Web3Util.execContractMethodCall({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("nft") || [],
    method: "ownerOf",
    params: [tokenId]
  });
  return approved;
}

export async function ownedNFTList(nftAddress: string, account: string) {
  const data = await Web3Util.execContractMethodCall({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("nft") || [],
    method: "ownedNFTList",
    params: [account]
  });
  return data;
}

export function approve(
  nftAddress: string,
  nftType: NftType,
  tokenId: number | string,
  target: string
) {
  switch (nftType) {
    case "ERC1155":
      return erc1155Approve(nftAddress, target);
    case "ERC721":
      return erc721Approve(nftAddress, tokenId, target);
    default:
      throw new Error(`The nft type is not supported: ${nftType}`);
  }
}

export function ERC721TotalSupply(token: string): Promise<string> {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    callAddress: token,
    method: "totalSupply"
  });
}

export function setApprovalForAll(nftAddress: string, target: string) {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    callAddress: nftAddress,
    method: "setApprovalForAll",
    params: [target, true]
  });
}

export async function checkApproved(
  nftAddress: string,
  nftType: NftType,
  tokenId: number | string,
  target: string
) {
  switch (nftType) {
    case "ERC1155":
      return erc1155CheckApproved(nftAddress, target);
    case "ERC721":
      return erc721CheckApproved(nftAddress, tokenId, target);
    default:
      throw new Error(`The nft type is not supported: ${nftType}`);
  }
}

export async function erc721IsApprovedForAll(
  nftAddress: string,
  target: string
) {
  return Web3Util.execContractMethodCall({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    method: "isApprovedForAll",
    params: [useWeb3Store.getState().account, target]
  });
}

export async function erc721IsApprovedForOne(
  nftAddress: string,
  tokenId: number | string,
  target: string
) {
  const approved = await Web3Util.execContractMethodCall({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    method: "getApproved",
    params: [tokenId]
  });
  return approved === target;
}

export async function erc721CheckApproved(
  nftAddress: string,
  tokenId: number | string,
  target: string
) {
  const approvedAll = await Web3Util.execContractMethodCall({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    method: "isApprovedForAll",
    params: [useWeb3Store.getState().account, target]
  });
  if (approvedAll) {
    return true;
  }
  const approved = await Web3Util.execContractMethodCall({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    method: "getApproved",
    params: [tokenId]
  });
  return approved === target;
}

function erc1155CheckApproved(nftAddress: string, target: string) {
  return Web3Util.execContractMethodCall({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("ERC1155") || [],
    method: "isApprovedForAll",
    params: [useWeb3Store.getState().account, target]
  });
}

export async function erc721Approve(
  nftAddress: string,
  tokenId: number | string,
  target: string
) {
  await Web3Util.execContractMethodSend({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    method: "approve",
    params: [target, tokenId]
  });
}

async function erc1155Approve(nftAddress: string, target: string) {
  await Web3Util.execContractMethodSend({
    callAddress: nftAddress,
    callAbi: Web3Util.getContractAbi("ERC1155") || [],
    method: "setApprovalForAll",
    params: [target, true]
  });
}

export function getERC721URI(address: string, tokenId: string) {
  return Web3Util.execContractMethodCall({
    callAddress: address,
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    method: "tokenURI",
    params: [tokenId]
  });
}

export async function getERC1155URI(address: string, tokenId: string) {
  const baseUri = await Web3Util.execContractMethodCall({
    callAddress: address,
    callAbi: Web3Util.getContractAbi("ERC1155") || [],
    method: "uri",
    params: [tokenId]
  });
  return baseUri.replace("0x{id}", tokenId);
}

export async function getTokenIds(erc721: string, owner: string) {
  console.log("11111", 11111);
  const balances = await Web3Util.execContractMethodCall({
    callAddress: erc721,
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    method: "balanceOf",
    params: [owner]
  });
  console.log("balance", balances);
  const tasks = [];
  for (let index = 0; index < Number(balances); index++) {
    tasks.push(
      Web3Util.execContractMethodCall({
        callAddress: erc721,
        callAbi: Web3Util.getContractAbi("ERC721") || [],
        method: "tokenOfOwnerByIndex",
        params: [owner, index]
      })
    );
  }
  return Promise.all(tasks);
}

export function mint(nftAddr: string, account: string, tokenURI: string) {
  console.log({
    nftAddr,
    account,
    tokenURI
  });
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("BitAppleNFT") || [],
    callAddress: nftAddr,
    method: "mint",
    params: [account, tokenURI]
  });
}
export function batchMint(
  nftAddr: string,
  account: string,
  tokenURI: string[]
) {
  console.log({
    nftAddr,
    account,
    tokenURI
  });
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("BitAppleNFT") || [],
    callAddress: nftAddr,
    method: "batchMint",
    params: [account, tokenURI]
  });
}

export function getNftName(nftAddr: string) {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    callAddress: nftAddr,
    method: "name"
  });
}

export function getNftSymbol(nftAddr: string) {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    callAddress: nftAddr,
    method: "symbol"
  });
}
