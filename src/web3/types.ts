export type ContractName =
  | "ERC165"
  | "ERC721"
  | "ERC1155"
  | "NftVault"
  | "NToken"
  | "WETH"
  | "ERC20"
  | "CurvePoolDeployer"
  | "CurvePlainPool"
  | "GaugeController"
  | "VotingEscrow"
  | "LA"
  | "FeeManager"
  | "Voting"
  | "Voting-Ownership"
  | "Voting-Parameter"
  | "Voting-EmergencyDAO"
  | "BatchProxy"
  | "CurveGauge";

export type ChainConfig = {
  id: number;
  name: string;
  icon: string;
  rpc: string[];
  scanPrefix: string;
  asPath?: string;
  gasPriceUrl?: string;
  disabled?: boolean;
  tokenAddress?: string;
  pricingTokens?: {
    [key in string]: {
      address: string;
      decimals: string;
      imgUrl: string;
    };
  };
  wrapedNativeToken: string;
  nativeToken: string;
  polyChainId?: number;
  defaultERC721: string;
  alchemyNetwork?: any;
};
