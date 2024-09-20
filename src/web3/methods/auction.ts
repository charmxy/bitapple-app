import { Web3Util } from "../web3-util";
import { ethers } from "ethers";

export function makeOffer(
  address: string,
  _tokenId: string,
  _price: string,
  _expiry: string,
  value: string
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("Auction") || [],
    callAddress: Web3Util.getContractAddress("Auction"),
    method: "makeOffer",
    params: [address, _tokenId, _price, _expiry],
    sendParams: {
      value
    }
  });
}

export function Transfer(
  from: string,
  to: string,
  tokenId: string,
  nft: string
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    callAddress: nft,
    method: "transferFrom",
    params: [from, to, tokenId]
  });
}

export function acceptOffer(_offerId: string): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("Auction") || [],
    callAddress: Web3Util.getContractAddress("Auction"),
    method: "acceptOffer",
    params: [_offerId]
  });
}

export function offers(
  nftAddr: string,
  tokenId: string,
  offerMakerAddress: string
): Promise<string> {
  console.log(nftAddr, tokenId, offerMakerAddress);
  const value = ethers.keccak256(
    ethers.solidityPacked(
      ["address", "uint256", "address"],
      [nftAddr, tokenId, offerMakerAddress]
    )
  );
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("Auction") || [],
    callAddress: Web3Util.getContractAddress("Auction"),
    method: "offers",
    params: [value]
  });
}
