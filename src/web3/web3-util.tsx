import Web3 from "web3";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { BigNumber as BigNumberJs } from "bignumber.js";
import { message } from "antd";
import { getContractAddress } from "./deployed";
import { CHAINS } from "./chains";
import { useWeb3Store } from "./use-web3-store";
export interface ExecContractMethodOptions {
  callAddress: string;
  callAbi: any[];
  method: string;
  params?: any[];
  sendParams?: object;
}

export const ZERO_ADDRESS = "0x" + new Array(40).fill(0).join("");
export const E18 = "1" + new Array(18).fill(0).join("");
export const ZERO_ADDRESS_EEE = "0x" + new Array(40).fill("e").join("");
export class Web3Util {
  static web3: Web3 = new Web3(Web3.givenProvider);
  // static ethersWeb3 = async () =>
  //   new ethers.BrowserProvider(window.web3.currentProvider);
  // 十进制转18进制
  static parseUnits(value: string, unitName = "18"): BigNumber {
    if (!value) {
      return BigNumber.from(0);
    }
    return BigNumber.from(
      new BigNumberJs(value)
        .multipliedBy(new BigNumberJs(10).pow(unitName))
        .toFixed()
    );
  }
  // 18进制转10进制
  static formatUnits(
    value: BigNumberish,
    unitName = "18",
    decimalPlacesInt = 6
  ): string {
    if (!value && value != "0") return "-";
    else if (value == "0") return "0";
    return new BigNumberJs(value.toString())
      .div(Math.pow(10, Number(unitName)))
      .decimalPlaces(decimalPlacesInt)
      .toString();
  }

  //大小比较

  static comparedTo(val1: BigNumberJs.Value, val2: BigNumberJs.Value): boolean {
    return new BigNumberJs(val1).comparedTo(new BigNumberJs(val2)) === 1
      ? false
      : true;
  }

  static minusMethod(val1: BigNumberJs.Value, val2: BigNumberJs.Value): string {
    return new BigNumberJs(val1)
      .minus(new BigNumberJs(val2))
      .decimalPlaces(6)
      .toString();
  }

  static addMethod(val1: BigNumberJs.Value, val2: BigNumberJs.Value): string {
    return new BigNumberJs(val1)
      .plus(new BigNumberJs(val2))
      .decimalPlaces(6)
      .toString();
  }
  static times(val1: BigNumberJs.Value, val2: BigNumberJs.Value): string {
    return new BigNumberJs(val1)
      .times(new BigNumberJs(val2))
      .decimalPlaces(6)
      .toString();
  }
  static dividedBy(val1: BigNumberJs.Value, val2: BigNumberJs.Value): string {
    if (val1 == 0 || val2 == 0) return "0";
    else
      return new BigNumberJs(val1)
        .dividedBy(new BigNumberJs(val2))
        .decimalPlaces(6)
        .toString();
  }

  static decimalPlaces(val: BigNumberJs.Value, fixd = 6): string {
    return val && val !== "NaN"
      ? new BigNumberJs(val).decimalPlaces(fixd).toString()
      : "0";
  }

  static getContractAddress(contractName: any): string {
    try {
      return getContractAddress(contractName, useWeb3Store.getState().chainId);
    } catch {
      return "";
    }
  }

  static getContractAbi(contractName: string): any[] | null {
    try {
      return require(`./abi/${contractName}.js`).default.abi;
    } catch {
      return null;
    }
  }

  // 判断是否连接钱包

  // 是否当前链（还需要给个弹窗切换链）
  static CurrentChain() {
    // 判断当前链是否是被支持的
    const chainId = useWeb3Store.getState().chainId;
    if (chainId) {
      if (CHAINS.find(item => chainId == item.id)) {
        return true;
      } else {
        // useWeb3Store.getState().open({ view: "Networks" });
        message.error("Connect to the right Sepolia chain first!");
      }
    }
  }

  static getWrapedNativeToken(): string {
    return Web3Util.getChainConfig().wrapedNativeToken;
  }

  static getChainConfig(
    chainId: number | null = useWeb3Store.getState().chainId
  ) {
    const chainConfig = CHAINS.find(c => c.id == chainId);
    return chainConfig || {};
  }

  static async execContractMethodCall({
    callAddress,
    callAbi,
    method,
    params
  }: ExecContractMethodOptions): Promise<any> {
    if ((await this.isConnetWalllex()) && this.CurrentChain()) {
      const instance = this.getContractInstance(callAddress, callAbi);
      const account = useWeb3Store.getState().account;
      if (instance.methods[method] === undefined) {
        const methods = [];
        for (const key in instance.methods) {
          methods.push(key);
        }
        throw new Error(
          `No method ${method} in contract ${callAddress}.Methods: ${methods}`
        );
      }
      return (
        params
          ? instance.methods[method](...params)
          : instance.methods[method]()
      ).call({
        from: account
      });
    }
  }

  static encodeFunctionData(abi: any[], functionName: string, params?: any[]) {
    const functionAbi = abi.find(e => e.name === functionName);
    return this.web3.eth.abi.encodeFunctionCall(functionAbi, params || []);
  }

  static encodeParameters(type: string[], parameter: any[]) {
    return this.web3.eth.abi.encodeParameters(type, parameter);
  }

  static async execContractMethodSend({
    callAddress,
    callAbi,
    method,
    params,
    sendParams
  }: ExecContractMethodOptions): Promise<any> {
    if ((await this.isConnetWalllex()) && this.CurrentChain()) {
      try {
        const account = useWeb3Store.getState().account;
        const instance = this.getContractInstance(callAddress, callAbi);
        const gasPrice = await this.getGasPrice();
        const execGas = await (params
          ? instance.methods[method](...params)
          : instance.methods[method]()
        ).estimateGas({ from: account, ...sendParams });
        const tx = await (params
          ? instance.methods[method](...params)
          : instance.methods[method]()
        )
          .send({
            from: account,
            gas: execGas?.toString(),
            gasPrice: BigNumber.from(gasPrice).mul(15).div(10).toString(),
            ...sendParams
          })
          .then(res => {
            // showTransactionReceiptMessage({
            //   type: 1,
            //   transactionHash: res?.transactionHash
            // });
            return res;
          })
          .catch(res => {
            if (!!res?.receipt?.transactionHash) {
              // globalModal.error({
              //   title: <ModalTitle title="Error" />,
              //   content: (
              //     <div className="ErrorCollapse">
              //       <div>
              //         Failed to call contract, refer to :<br />
              //         <a
              //           href={`https://sepolia.etherscan.io/tx/${res?.receipt?.transactionHash}`}
              //           target="_blank"
              //           rel="noreferrer"
              //         >
              //           {res?.receipt?.transactionHash}
              //         </a>
              //       </div>
              //     </div>
              //   )
              // });
            } else {
              // globalModal.error({
              //   title: <ModalTitle title="Error" />,
              //   content: (
              //     <div className="ErrorCollapse">
              //       <div>{res?.innerError?.message}</div>
              //     </div>
              //   )
              // });
            }
            throw res;
          });
        return tx;
      } catch (err: any) {
        // globalModal.error({
        //   title: <ModalTitle title="Error" />,
        //   content: (
        //     <div className="ErrorCollapse">
        //       <div>{err.message}</div>
        //     </div>
        //   )
        // });
        throw err;
      }
    }
  }

  static async isConnetWalllex() {
    const account = useWeb3Store.getState().account;
    if (account) {
      return true;
    } else {
      // useWeb3Store.getState().open();
      return false;
    }
  }

  static async getGasPrice() {
    return this.web3.eth.getGasPrice();
  }

  // 对应地址和abi的方法
  private static getContractInstance(address: string, abi: any[]) {
    // if (!this.contractInstanceMap.has(address)) {
    //   const instance = new this.web3.eth.Contract(abi, address)
    //   this.contractInstanceMap.set(address, instance)
    //   return instance
    // }
    return new this.web3.eth.Contract(abi, address);
  }

  // 切割
  static getSlicingString(value: string) {
    if (!value) {
      return "-";
    }
    if (value.length <= 12) {
      return value;
    }

    const start = value.substring(0, 6);
    const end = value.substring(value.length - 6);

    return `${start}...${end}`;
  }

  static isAddressEqual(addr0: string, addr1: string): boolean {
    if (addr0 && addr1)
      return addr0.toLocaleLowerCase() === addr1.toLocaleLowerCase();
    else return false;
  }

  static async estimateGas({
    callAddress,
    callAbi,
    method,
    params,
    sendParams
  }: ExecContractMethodOptions) {
    const instance = this.getContractInstance(callAddress, callAbi);
    // const gasPrice = await this.getGasPrice()
    const account = useWeb3Store.getState().account;
    const execGas = await (params
      ? instance.methods[method](...params)
      : instance.methods[method]()
    ).estimateGas({ from: account, ...sendParams });

    return execGas;
  }

  static async changeCHAIN(chainId: Number) {
    // return await this.web3.provider.request({
    //   method: "wallet_switchEthereumChain",
    //   params: [
    //     {
    //       chainId: `0x${chainId.toString(16)}`
    //     }
    //   ]
    // });
  }

  static addTokenToWallet(
    tokenAddress: string,
    tokenSymbol: string,
    tokenDecimals: number,
    tokenImage: string
  ) {
    // return this.web3.provider.request({
    //   method: "wallet_watchAsset",
    //   params: {
    //     type: "ERC20",
    //     options: {
    //       address: tokenAddress, // The address of the token.
    //       symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.
    //       decimals: tokenDecimals, // The number of decimals in the token.
    //       image: tokenImage // A string URL of the token logo.
    //     }
    //   }
    // });
  }

  static formatTime(diff: number) {
    // 计算天数
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // 计算小时数
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // 计算分钟数
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} Day ${hours} Hours ${minutes} Min`;
  }

  //千分位

  static thousandSign2(num: string) {
    if (num === "-" || !num) return "-";
    else return (num + "").replace(/\d(?=(\d{3})+$)/g, "$&,");
  }
}
