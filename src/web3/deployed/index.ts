export function getContractAddress(key: string, chainId?: number | null) {
  return require(`./${chainId}_deployed_contract_info.json`)[key].address;
}
