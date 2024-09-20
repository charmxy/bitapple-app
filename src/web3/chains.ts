import {
  mainnet,
  polygon,
  sepolia,
  bsc,
  arbitrumSepolia,
  optimism,
  base,
  okc,
  arbitrum
} from "viem/chains";

// 支持的链

export const CHAINS: any[] = [
  // arbitrum,
  mainnet,
  // polygon,
  sepolia,
  polygon,
  arbitrumSepolia,
  bsc,
  optimism,
  arbitrum,
  okc,
  base
];

export const GQL_URLS = {
  [sepolia.id]:
    "https://api.studio.thegraph.com/query/61267/bitapple-sepolia/version/latest",
  [arbitrumSepolia.id]:
    "https://api.thegraph.com/subgraphs/name/huangxiao88/bitapple-arb",
  [bsc.id]:
    "https://api.studio.thegraph.com/query/61267/bitapple-bsc/version/latest"
};

export enum BLOCKCHAIN {
  "ETH_SEPOLIA" = 11155111,
  "ARB_SEPOLIA" = 421614,
  "ARB" = 421614,
  "BNB" = 56,
  "POLYGON" = 137,
  "BASE" = 8453,
  "OPTIMISM" = 10,
  "ETH" = 1
}

export const TOKESSWAPCHAIN: any = {
  [bsc.id]: require("@/assets/blockchain/bnb.png"),
  [polygon.id]: require("@/assets/blockchain/polygon.png"),
  [mainnet.id]: require("@/assets/blockchain/eth.png"),
  [sepolia.id]: require("@/assets/chain/eth.png"),
  [arbitrumSepolia.id]: require("@/assets/chain/eth.png"),
  [base.id]: require("@/assets/blockchain/base.png"),
  [arbitrum.id]: require("@/assets/blockchain/arbitrum-one.png"),
  [okc.id]:
    "https://static.oklink.com/cdn/assets/imgs/234/8A836F174073E0BA.png?x-oss-process=image/resize,w_72,h_72,type_6/ignore-error,1",
  [optimism.id]: require("@/assets/blockchain/op.png")
};

export const RPCS: any = {
  [bsc.id]: "https://bsc-dataseed.binance.org/",
  [polygon.id]: polygon.rpcUrls.default.http[0],
  [mainnet.id]: mainnet.rpcUrls.default.http[0],
  [sepolia.id]: sepolia.rpcUrls.default.http[0],
  [arbitrumSepolia.id]: arbitrumSepolia.rpcUrls.default.http[0],
  [base.id]: base.rpcUrls.default.http[0],
  [arbitrum.id]: arbitrum.rpcUrls.default.http[0],
  [okc.id]: okc.rpcUrls.default.http[0],
  [optimism.id]: optimism.rpcUrls.default.http[0]
};

export const CHAINSTOKENS: any[] = [
  polygon,
  mainnet,
  bsc,
  optimism,
  arbitrum,
  okc,
  base,
  arbitrumSepolia
];
