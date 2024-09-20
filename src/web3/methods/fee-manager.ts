import { Web3Util } from "../web3-util";
import { createTransactionModel } from "./utils";

const model = createTransactionModel("FeeManager");

export function wrapFee(wnftAddr: string) {
  if (!Web3Util.getContractAddress("FeeManager")) {
    return "0";
  }
  return model("CALL", "wrapFee", [wnftAddr]);
}

export function unwrapFee(wnftAddr: string) {
  if (!Web3Util.getContractAddress("FeeManager")) {
    return "0";
  }
  return model("CALL", "unwrapFee", [wnftAddr]);
}
