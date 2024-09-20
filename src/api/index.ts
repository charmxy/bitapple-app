import { awaitTo } from "@/api/http";

export const uploadImage = (mimeType: any, file: any) => {
  return awaitTo("/api/ipfs/uploadImage2ipfs", {
    data: { mimeType, file, useGateway: false },
    type: "POST"
  });
};

export const uploadMetadata = (name: any, description: any, image: any) => {
  return awaitTo("/api/ipfs/uploadMetadata2ipfs", {
    data: { name, description, image, useGateway: false },
    type: "POST"
  });
};

export const uploadContractMetadata2ipfs = (
  name: any,
  image: any,
  description: any
) => {
  return awaitTo("/api/ipfs/uploadContractMetadata2ipfs", {
    data: { name, image, description, useGateway: false },
    type: "POST"
  });
};

//登入
export const oauthToken = (data: any) => {
  return awaitTo("/app/api/oauth/token", {
    data,
    type: "POST"
  });
};

//获取nonce，如果没有nonce，用BitApple@2024签名
export const oauthNonce = (params: any) => {
  return awaitTo("/app/api/oauth/nonce", {
    params,
    type: "GET"
  });
};

//获取nonce，如果没有nonce，用BitApple@2024签名
export const userTokens = (params: any) => {
  return awaitTo("/app/api/user/tokens", {
    params,
    type: "GET"
  });
};

export const tokenRewardDetail = (params: any) => {
  return awaitTo("/app/api/token-reward-detail/", {
    params,
    type: "GET"
  });
};

export const claimAllRecord = (params: any) => {
  return awaitTo("/app/api/stake-record/claim-all/", {
    params,
    type: "GET"
  });
};

export const getBanner = (params: any) => {
  return awaitTo("/app/api/banner/", {
    params,
    type: "GET"
  });
};

export const statistics = (params: any) => {
  return awaitTo("/app/api/stake-record/statistics/", {
    params,
    type: "GET"
  });
};

export const stakeClaimAllRecord = (data: any) => {
  return awaitTo("/app/api/stake-record/claim-all", {
    data,
    type: "POST"
  });
};

//根据invitationCode获取invitationCode信息
export const infoByCode = (params: any) => {
  return awaitTo("/app/api/invitation-code/infoByCode", {
    params,
    type: "GET"
  });
};

//获取登录用户的invitationCode列表
export const invitationCode = () => {
  return awaitTo("/app/api/invitation-code", {
    type: "GET"
  });
};

// bind绑定接口，钱包签名登录成功后，调用bind接口，绑定用户和invitationCode
export const invitationCodeBind = (data: any) => {
  return awaitTo("/app/api/invitation-code/bind", {
    type: "POST",
    data
  });
};

// bind绑定接口，钱包签名登录成功后，调用bind接口，绑定用户和invitationCode
export const invitationCodeUpdateRemark = (data: any) => {
  return awaitTo("/app/api/invitation-code/updateRemark", {
    type: "POST",
    data
  });
};

export const oauthMe = () => {
  return awaitTo("/app/api/oauth/me", {
    type: "GET"
  });
};

export const taskFinish = (data: { taskCode: any }) => {
  return awaitTo(`/app/api/tasks/${data.taskCode}/finish`, {
    type: "PUT",
    data
  });
};

export const tasks = () => {
  return awaitTo("/app/api/tasks", {
    type: "GET"
  });
};

export const pointsRecord = () => {
  return awaitTo("/app/api/points-record/", {
    type: "GET"
  });
};

export const tasksNewbie = () => {
  return awaitTo("/app/api/tasks/newbie", {
    type: "GET"
  });
};

export const twitterLoginUrl = () => {
  return awaitTo("/app/api/tasks/twitter-login-url", {
    type: "GET"
  });
};
export const twitterCallback = (params: any) => {
  return awaitTo("/app/api/tasks/twitter-callback", {
    type: "GET",
    params
  });
};

export const telegramCallback = (params: any) => {
  return awaitTo("/app/api/tasks/telegram-callback", {
    type: "GET",
    params
  });
};

export const assetPackage = (params: any) => {
  return awaitTo("/app/api/nft-collection/asset-package/", {
    type: "GET",
    params
  });
};

export const fts = (params: any) => {
  return awaitTo("/app/api/ft/", {
    type: "GET",
    params
  });
};

export const assetPackageById = (params: any) => {
  return awaitTo(`/app/api/nft-collection/asset-package/${params}`, {
    type: "GET"
  });
};

export const activeListByFtList = (data: any) => {
  return awaitTo("/app/api/nft-collection/activeListByFtList", {
    type: "POST",
    data
  });
};

export const NFTwrap = (data: any) => {
  return awaitTo("/app/api/nft/wrap", {
    type: "POST",
    data
  });
};

export const NFTunwrap = (data: any) => {
  return awaitTo("/app/api/nft/unwrap", {
    type: "POST",
    data
  });
};

export const assetPackageByAdress = (params: { collectionId: any }) => {
  return awaitTo(
    `/app/api/nft-collection/asset-package-by-address/${params.collectionId}`,
    {
      type: "GET",
      params
    }
  );
};

export const stakes = (params: any) => {
  return awaitTo("/app/api/stake/", {
    type: "GET",
    params
  });
};

export const stakesList = (params: any) => {
  return awaitTo("/app/api/stake-record/", {
    type: "GET",
    params
  });
};

export const stakeAction = (data: any) => {
  return awaitTo("/app/api/stake-record/stake/", {
    type: "POST",
    data
  });
};

export const unStakeAction = (data: any) => {
  return awaitTo("/app/api/stake-record/unstake/", {
    type: "POST",
    data
  });
};

export const bridgeChains = () => {
  return awaitTo(`/app/api/cross-chain-bridge/chains`, {
    type: "GET"
  });
};

export async function downloadUpload(params: any) {
  return awaitTo("/api/crm/file/download", {
    method: "GET",
    params
  });
}

export const crossChainBridgeTokens = (params: any) => {
  return awaitTo(`/app/api/cross-chain-bridge/tokens/${params}`, {
    type: "GET"
  });
};

export const crossChainBridgeRouters = (params: any) => {
  return awaitTo(`/app/api/cross-chain-bridge/routers`, {
    type: "GET",
    params
  });
};

export const crossChainBridgeApprove = (params: any) => {
  return awaitTo(`/app/api/cross-chain-bridge/approve`, {
    type: "GET",
    params
  });
};

export const crossChainBridgeBuildTx = (params: any) => {
  return awaitTo(`/app/api/cross-chain-bridge/build-tx`, {
    type: "GET",
    params
  });
};

export const crossChainBridgePost = (data: any) => {
  return awaitTo("/app/api/cross-chain-bridge/post", {
    type: "POST",
    data
  });
};

export const crossChainBridgeRecords = (params: any) => {
  return awaitTo(`/app/api/cross-chain-bridge/records`, {
    type: "GET",
    params
  });
};

export const crossChainBridgeStatus = (params: any) => {
  return awaitTo(`/app/api/cross-chain-bridge/status`, {
    type: "GET",
    params
  });
};

export const crossChainBridgeChainId = (chainId: any) => {
  return awaitTo(`/app/api/ft/chain-token/${chainId}`, {
    type: "GET"
  });
};

export const pointsRank = (chainId: any) => {
  return awaitTo(`/app/api/user/points/rank`, {
    type: "GET"
  });
};

export const whitelistSignature = () => {
  return awaitTo(`/app/api/contract-whitelist/signature`, {
    type: "GET"
  }) as any;
};

export const notifyPage = (params: any) => {
  return awaitTo(`/app/api/notify/page`, {
    type: "GET",
    params
  });
};

export const notifyDisable = (data: any) => {
  return awaitTo(`/app/api/notify/disable`, {
    type: "PUT",
    data
  });
};

export const notifyDisableAll = () => {
  return awaitTo(`/app/api/disable/all`, {
    type: "PUT"
  });
};
