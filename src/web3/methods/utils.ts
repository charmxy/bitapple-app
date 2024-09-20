import { BigNumberish, BigNumber } from '@ethersproject/bignumber'
import { ContractName } from '../types';
import { ExecContractMethodOptions, Web3Util } from '../web3-util'

export function createTransactionModel(contractName: ContractName, contractAddr?: string) {
    const callAbi = Web3Util.getContractAbi(contractName);
    const callAddress = contractAddr ? contractAddr: Web3Util.getContractAddress(contractName);
    return (
        callOrSend: 'CALL' | 'SEND',
        method: string,
        params?: any | any[],
        sendParams?: { value: BigNumberish }
    ) => {
        const args: ExecContractMethodOptions = {
            callAbi,
            callAddress,
            params: params ? (Array.isArray(params) ? params : [params]) : params,
            sendParams,
            method
        };
        if(callOrSend === 'CALL') {
            return Web3Util.execContractMethodCall(args)
        } else{
            return Web3Util.execContractMethodSend(args);
        }
    }
}

export function createTransactionModelWithContractAddr(contractName: ContractName) {
    const callAbi = Web3Util.getContractAbi(contractName);
    return (
        callAddress: string,
        callOrSend: 'CALL' | 'SEND',
        method: string,
        params?: any | any[],
        sendParams?: { value: BigNumberish }
    ) => {
        const args: ExecContractMethodOptions = {
            callAbi,
            callAddress,
            params: params ? (Array.isArray(params) ? params : [params]) : params,
            sendParams,
            method
        };
        if(callOrSend === 'CALL') {
            return Web3Util.execContractMethodCall(args)
        } else{
            return Web3Util.execContractMethodSend(args);
        }
    }
}

export function createEstimationContractModel(contractName: ContractName) {
    const callAbi = Web3Util.getContractAbi(contractName);
    return async (
        method: string,
        params?: any | any[],
        sendParams?: { value: BigNumberish }
    ) => {
        const callAddress = Web3Util.getContractAddress(contractName);
        const args: ExecContractMethodOptions = {
            callAbi,
            callAddress,
            params: params ? (Array.isArray(params) ? params : [params]) : params,
            sendParams,
            method
        };
        const gasLimit = await Web3Util.estimateGas(args).catch(e => '-');
        if(gasLimit === '-') {
            return '-';
        }
        const gasPrice = await Web3Util.getGasPrice();
        return Web3Util.formatUnits(BigNumber.from(gasLimit).mul(gasPrice));
    }
}

export function createEstimationContractModelWithAddr(contractName: ContractName) {
    const callAbi = Web3Util.getContractAbi(contractName);
    return async (
        callAddress: string,
        method: string,
        params?: any | any[],
        sendParams?: { value: BigNumberish }
    ) => {
        const args: ExecContractMethodOptions = {
            callAbi,
            callAddress,
            params: params ? (Array.isArray(params) ? params : [params]) : params,
            sendParams,
            method
        };
        try{
            const gasLimit = await Web3Util.estimateGas(args);
            const gasPrice = await Web3Util.getGasPrice();
            return Web3Util.formatUnits(BigNumber.from(gasLimit).mul(gasPrice));
        } catch(err) {
            console.error(err)
            return '-'
        }
    }
}