import { Web3Util } from "../web3-util";
import {
  createEstimationContractModelWithAddr,
  createTransactionModel,
  createTransactionModelWithContractAddr
} from "./utils";

const poolContractModel =
  createTransactionModelWithContractAddr("CurvePlainPool");
const poolContractModelForEstimation =
  createEstimationContractModelWithAddr("CurvePlainPool");
const gaugeContractModel = createTransactionModelWithContractAddr("CurveGauge");

export async function deployPool(
  wnftAddr: string,
  poolName: string,
  poolSymbol: string,
  A: string,
  gama: string,
  midFee: string,
  outFee: string,
  allowedExtraProfit: string,
  feeGama: string,
  adjustmentStep: string,
  maHalfTime: string,
  wnftPrice: string
) {
  gama = Web3Util.parseUnits(gama).toString();
  midFee = Web3Util.parseUnits(midFee, "8").toString();
  outFee = Web3Util.parseUnits(outFee, "8").toString();
  allowedExtraProfit = Web3Util.parseUnits(allowedExtraProfit).toString();
  feeGama = Web3Util.parseUnits(feeGama).toString();
  adjustmentStep = Web3Util.parseUnits(adjustmentStep).toString();
  const initialPrice = Web3Util.parseUnits(
    (1 / Number(wnftPrice)).toString()
  ).toString();
  const adminFee = "5000000000";

  return Web3Util.execContractMethodSend({
    callAddress: Web3Util.getContractAddress("CurvePoolDeployer"),
    callAbi: Web3Util.getContractAbi("CurvePoolDeployer") || [],
    params: [
      poolName,
      poolSymbol,
      [wnftAddr, Web3Util.getWrapedNativeToken()],
      A,
      gama, //gama
      midFee, //mid_fee
      outFee, //out_fee
      allowedExtraProfit, //allowed_extra_profit
      feeGama, //fee_gama
      adjustmentStep, //adjustment_step
      adminFee, //admin_fee
      maHalfTime, //ma_half_time
      initialPrice
    ],
    method: "deploy_pool"
  });
}

export async function calcTokenAmount(poolAddr: string, amounts: string[]) {
  amounts = amounts.map(e => Web3Util.parseUnits(e).toString());
  const tokenAmount = await poolContractModel(
    poolAddr,
    "CALL",
    "calc_token_amount",
    [amounts]
  );
  return Web3Util.formatUnits(tokenAmount);
}

export async function addLiquidity(
  poolAddr: string,
  amounts: string[],
  minMintAmount: string,
  sendETHValue: string
) {
  amounts = amounts.map(e => Web3Util.parseUnits(e).toString());
  minMintAmount = Web3Util.parseUnits(minMintAmount).toString();
  sendETHValue = Web3Util.parseUnits(sendETHValue).toString();
  return poolContractModel(
    poolAddr,
    "SEND",
    "add_liquidity",
    [amounts, minMintAmount, true],
    { value: sendETHValue }
  );
}

export async function estimatedAddLiquidity(
  poolAddr: string,
  amounts: string[],
  minMintAmount: string,
  sendETHValue: string
) {
  amounts = amounts.map(e => Web3Util.parseUnits(e).toString());
  minMintAmount = Web3Util.parseUnits(minMintAmount).toString();
  sendETHValue = Web3Util.parseUnits(sendETHValue).toString();
  return poolContractModelForEstimation(
    poolAddr,
    "add_liquidity",
    [amounts, minMintAmount, true],
    { value: sendETHValue }
  );
}

export async function calcWithdrawOneCoin(
  poolAddr: string,
  tokenAmount: string,
  tokenIndex: any
) {
  tokenAmount = Web3Util.parseUnits(tokenAmount).toString();
  const withdrawCoinAmount = await poolContractModel(
    poolAddr,
    "CALL",
    "calc_withdraw_one_coin",
    [tokenAmount, tokenIndex]
  );
  return Web3Util.formatUnits(withdrawCoinAmount);
}

export async function removeLiquidityOneCoin(
  poolAddr: string,
  tokenAmount: string,
  tokenIndex: string | number,
  minAmount: string
) {
  tokenAmount = Web3Util.parseUnits(tokenAmount).toString();
  minAmount = Web3Util.parseUnits(minAmount).toString();
  return poolContractModel(poolAddr, "SEND", "remove_liquidity_one_coin", [
    tokenAmount,
    tokenIndex,
    minAmount,
    true
  ]);
}

export async function estimateRemoveLiquidityOnCoin(
  poolAddr: string,
  tokenAmount: string,
  tokenIndex: string | number,
  minAmount: string
) {
  tokenAmount = Web3Util.parseUnits(tokenAmount).toString();
  minAmount = Web3Util.parseUnits(minAmount).toString();
  return poolContractModelForEstimation(poolAddr, "remove_liquidity_one_coin", [
    tokenAmount,
    tokenIndex,
    minAmount,
    true
  ]);
}

export async function removeLiquidity(
  poolAddr: string,
  tokenAmount: string,
  minAmounts: string[]
) {
  tokenAmount = Web3Util.parseUnits(tokenAmount).toString();
  minAmounts = minAmounts.map(e => Web3Util.parseUnits(e).toString());
  return poolContractModel(poolAddr, "SEND", "remove_liquidity", [
    tokenAmount,
    minAmounts,
    true
  ]);
}

export async function estimateRemoveLiquidity(
  poolAddr: string,
  tokenAmount: string,
  minAmounts: string[]
) {
  tokenAmount = Web3Util.parseUnits(tokenAmount).toString();
  minAmounts = minAmounts.map(e => Web3Util.parseUnits(e).toString());
  return poolContractModelForEstimation(poolAddr, "remove_liquidity", [
    tokenAmount,
    minAmounts,
    true
  ]);
}

export async function coinReserves(poolAddr: string): Promise<string[]> {
  return Promise.all([0, 1].map(i => balances(poolAddr, i)));
}

export async function balances(
  poolAddr: string,
  coinIndex: number | string
): Promise<string> {
  const reserve = await poolContractModel(poolAddr, "CALL", "balances", [
    coinIndex
  ]);
  return Web3Util.formatUnits(reserve);
}

export async function getDy(
  poolAddr: string,
  inputCoinIndex: number,
  inputAmount: string
) {
  inputAmount = Web3Util.parseUnits(inputAmount).toString();
  const outputAmount = await poolContractModel(poolAddr, "CALL", "get_dy", [
    inputCoinIndex,
    inputCoinIndex === 0 ? 1 : 0,
    inputAmount
  ]);
  return Web3Util.formatUnits(outputAmount);
}

export function exchangeETH(
  poolAddr: string,
  inputCoinIndex: number,
  inputAmount: string,
  minOutput: string,
  sendETHValue: string
) {
  inputAmount = Web3Util.parseUnits(inputAmount).toString();
  minOutput = Web3Util.parseUnits(minOutput).toString();
  sendETHValue = Web3Util.parseUnits(sendETHValue).toString();
  return poolContractModel(
    poolAddr,
    "SEND",
    "exchange_underlying",
    [inputCoinIndex, inputCoinIndex === 0 ? 1 : 0, inputAmount, minOutput],
    { value: sendETHValue }
  );
}

export function estimateExchangeETH(
  poolAddr: string,
  inputCoinIndex: number,
  inputAmount: string,
  minOutput: string,
  sendETHValue: string
) {
  inputAmount = Web3Util.parseUnits(inputAmount).toString();
  minOutput = Web3Util.parseUnits(minOutput).toString();
  sendETHValue = Web3Util.parseUnits(sendETHValue).toString();
  return poolContractModelForEstimation(
    poolAddr,
    "exchange_underlying",
    [inputCoinIndex, inputCoinIndex === 0 ? 1 : 0, inputAmount, minOutput],
    { value: sendETHValue }
  );
}

export async function depositToGauge(
  gaugeAddr: string,
  amount: string,
  parse = true
) {
  amount = parse ? Web3Util.parseUnits(amount).toString() : amount;
  return gaugeContractModel(gaugeAddr, "SEND", "deposit", [amount]);
}

export async function withdrawFromGauge(
  gaugeAddr: string,
  amount: string,
  claimRewards = false
) {
  amount = Web3Util.parseUnits(amount).toString();
  return gaugeContractModel(gaugeAddr, "SEND", "withdraw", [
    amount,
    claimRewards
  ]);
}

export async function claimableTokens(gaugeAddr: string, user: string) {
  const rewards = await gaugeContractModel(
    gaugeAddr,
    "CALL",
    "claimable_tokens",
    [user]
  );
  return Web3Util.formatUnits(rewards);
}

export async function claimRewards(gaugeAddr: string) {
  return gaugeContractModel(gaugeAddr, "SEND", "claim_rewards");
}
