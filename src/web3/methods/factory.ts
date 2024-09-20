import { Web3Util } from "../web3-util";

// 定义合约方法
export function deploy({
  _name,
  _symbol,
  _contractURI,
  _supply
}: {
  _name: string;
  _symbol: string;
  _contractURI: string;
  _supply: string;
}): Promise<string> {
  console.log([_name, _symbol, _contractURI, _supply]);
  return Web3Util.execContractMethodSend({
    callAbi: Web3Util.getContractAbi("BitAppleNFTFactory") || [],
    callAddress: Web3Util.getContractAddress("BitAppleNFTFactory"),
    method: "createCollection",
    params: [_name, _symbol, _contractURI, _supply]
  });
}

export function list() {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("BitAppleNFTFactory") || [],
    callAddress: Web3Util.getContractAddress("BitAppleNFTFactory"),
    method: "list"
  });
}

export function allNFTCollectibleMintHistory() {
  return Web3Util.execContractMethodCall({
    callAbi: Web3Util.getContractAbi("BitAppleNFTFactory") || [],
    callAddress: Web3Util.getContractAddress("BitAppleNFTFactory"),
    method: "allNFTCollectibleMintHistory"
  });
}
