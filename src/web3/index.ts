import { useEffect } from "react";
import { useWeb3Store } from "./use-web3-store";
export * from "./web3-util";
export * from "./use-web3-store";

export function useWeb3ActiveEffect(callback: any, deeps: any[] = []) {
  const { account } = useWeb3Store();
  useEffect(() => {
    callback(account);
  }, [account, ...deeps]);
}
