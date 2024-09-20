import { Web3Util, ZERO_ADDRESS } from "../web3-util";

export function placeOrder(
  nft: string,
  tokenId: string,
  price: string,
  ttl: string
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("OrderBook") || [],
    callAddress: Web3Util.getContractAddress("OrderBook"),
    method: "placeOrder",
    params: [
      {
        nft,
        tokenId,
        price,
        expiry: ttl
      }
    ]
  });
}

export function batchPlaceOrder(params: any): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("OrderBook") || [],
    callAddress: Web3Util.getContractAddress("OrderBook"),
    method: "batchPlaceOrder",
    params: [params]
  });
}

export function buyOrder(
  _orderId: string,
  sendParams: object
): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("OrderBook") || [],
    callAddress: Web3Util.getContractAddress("OrderBook"),
    method: "buyOrder",
    params: [_orderId],
    sendParams
  });
}

export function cancelOrder(offerId: string): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("Auction") || [],
    callAddress: Web3Util.getContractAddress("Auction"),
    method: "cancelOffer",
    params: [offerId]
  });
}

export function approveRegister(tokenId: string, nft: string): Promise<string> {
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("ERC721") || [],
    callAddress: nft,
    method: "approve",
    params: [ZERO_ADDRESS, tokenId]
  });
}
