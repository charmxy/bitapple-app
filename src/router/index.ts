import type { ComponentType } from "react";
import Welcome from "@/pages/welcome";
import Follow from "@/pages/follow";
import Marketplace from "@/pages/marketplace";
import Launchpad from "@/pages/launchpad";
import Warp from "@/pages/warp";
import Stake from "@/pages/stake";

interface Route {
  path: string;
  Component: ComponentType;
  auth: boolean;
  whitelist?: boolean;
}

export const routes: Route[] = [
  { path: "/", Component: Welcome, auth: false },
  { path: "/welcome", Component: Welcome, auth: false, whitelist: true },
  { path: "/follow", Component: Follow, auth: false, whitelist: true },
  { path: "/launchpad", Component: Launchpad, auth: false, whitelist: true },
  {
    path: "/marketplace",
    Component: Marketplace,
    auth: false,
    whitelist: true
  },
  { path: "/warp", Component: Warp, auth: false, whitelist: true },
  { path: "/stake", Component: Stake, auth: false, whitelist: true }
];

// import React, { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "../pages/home";
// import Collections from "../pages/collections";
// import Collection from "../pages/collection";
// import Details from "../pages/details";
// import CreateNFT from "../pages/CreateNFT";
// import Pool from "../pages/createPool";
// import CreateCollection from "../pages/CreateCollection";
// import MyCollected from "../pages/myWeb/domains";
// import Dust from "../pages/myWeb/dust";
// import MyList from "../pages/myWeb/listings";
// import OffersMade from "../pages/myWeb/offersMade";
// import OffersReceived from "../pages/myWeb/offersReceived";
// import Activity from "../pages/myWeb/activity";
// import Staking from "../pages/myWeb/staking";
// import Rewards from "../pages/myWeb/rewards";
// import ResultPage from "../pages/ResultPage";
// import Stake from "../pages/Stake";
// import Bridge from "../pages/Bridge";
// import AssetPackage from "../pages/AssetPackage";
// import TestAsset from "../pages/TestAsset";
// import Wrap from "../pages/Wrap";
// import WrapDetails from "../pages/WrapDetails";
// import Tasklist from "../pages/Tasklist";
// import TaskPoints from "../pages/Tasklist/points";
// import Invitation from "../pages/Invitation";
// import Swap from "../pages/Swap";
// import InviteFriends from "../pages/InviteFriends";
// import Create from "../pages/create";
// import Points from "../pages/points";
// import CollectionsNft from "../pages/CollectionsNft";
// import HistroyTask from "../pages/mobile/histroyTask";
// import WelcomePage from "../pages/welcome";
// import MoreInviteCode from "../pages/mobile/moreInviteCode";
// import RewardsHistroy from "../pages/myWeb/rewards/rewardsHistroy";

// export const routers = [
//   { path: "/Welcome", element: <WelcomePage />, auth: false,whitelist:true },
//   { path: "/Invitation", element: <Invitation />, auth: false,whitelist:true },
//   { path: "/Wrap", element: <Wrap />, auth: true },
//   { path: "/home", element: <Home />, auth: true },
//   { path: "/Collection", element: <Collections />, auth: true },
//   { path: "/SwapToken", element: <Swap />, auth: true },
//   { path: "/Swap", element: <Collection />, auth: true },
//   { path: "/Create", element: <Create />, auth: true },
//   { path: "/Points", element: <Points />, auth: true },
//   { path: "/details", element: <Details />, auth: true },
//   { path: "/CreateNFT", element: <CreateNFT />, auth: true },
//   { path: "/CreateNFTcollection", element: <CreateCollection />, auth: true },
//   { path: "/Pool", element: <Pool />, auth: true },
//   { path: "/my/collected", element: <MyCollected />, auth: true },
//   { path: "/my/dust", element: <Dust />, auth: true },
//   { path: "/my/listings", element: <MyList />, auth: true },
//   { path: "/my/offersMade", element: <OffersMade />, auth: true },
//   { path: "/my/offersReceived", element: <OffersReceived />, auth: true },
//   { path: "/my/offersReceived", element: <OffersReceived />, auth: true },
//   { path: "/my/offersReceived", element: <OffersReceived />, auth: true },
//   { path: "/my/offersReceived", element: <OffersReceived />, auth: true },
//   { path: "/my/activity", element: <Activity />, auth: true },
//   { path: "/my/staking", element: <Staking />, auth: true },
//   { path: "/my/rewards", element: <Rewards />, auth: true },
//   { path: "/my/rewardsHistroy", element: <RewardsHistroy />, auth: true },
//   { path: "/ResultPage", element: <ResultPage />, auth: true },
//   { path: "/Stake", element: <Stake />, auth: true },
//   { path: "/Bridge", element: <Bridge />, auth: true },
//   { path: "/AssetPackage", element: <AssetPackage />, auth: true },
//   { path: "/TestAsset", element: <TestAsset />, auth: true },
//   { path: "/WrapDetails", element: <WrapDetails />, auth: true },
//   { path: "/Tasklist", element: <Tasklist />, auth: true },
//   { path: "/TaskPoints", element: <TaskPoints />, auth: true },
//   { path: "/InviteFriends", element: <InviteFriends />, auth: true,whitelist:true },
//   { path: "/Collections", element: <CollectionsNft />, auth: true },
//   { path: "/HistroyTask", element: <HistroyTask />, auth: true },
//   { path: "/MoreInviteCode", element: <MoreInviteCode />, auth: true,whitelist:true },
// ];
