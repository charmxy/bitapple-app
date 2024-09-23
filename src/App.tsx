import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CHAINS } from "@/web3/chains";
import { createWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi";
import { useWeb3Store } from "@/web3/use-web3-store";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ConfigProvider } from "antd";
import { GQL_URLS } from "@/web3/chains";
import { routes } from "@/router/index";
import Layout from "@/layouts/Layout";

const projectId = "6bac6309303909f3efbb1461400e772a";

// Create WagmiConfig
const { chains, publicClient } = configureChains(CHAINS, [
  walletConnectProvider({ projectId }),
  publicProvider()
]);

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata }
    }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name }
    })
  ],
  publicClient
});

// Create Modal
createWeb3Modal({
  featuredWalletIds: [
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96"
  ],
  themeMode: "light",
  wagmiConfig,
  projectId,
  chains
});

function App() {
  const { selectedNetworkId } = useWeb3ModalState();
  const { chainId } = useWeb3Store();

  let client = new ApolloClient({
    uri: GQL_URLS(selectedNetworkId || chainId || 11155111),
    cache: new InMemoryCache()
  });

  useEffect(() => {
    if (selectedNetworkId || chainId)
      client = new ApolloClient({
        uri: GQL_URLS(selectedNetworkId || chainId || 0),
        cache: new InMemoryCache()
      });
  }, [selectedNetworkId, chainId]);

  return (
    <ApolloProvider client={client}>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              activeBg: "transparent",
              activeBorderColor: "#FF8C19"
            }
          }
        }}
      >
        <BrowserRouter>
          <WagmiConfig config={wagmiConfig}>
            <Layout>
              <Routes>
                {routes.map(route => (
                  <Route key={route.path} {...route} />
                ))}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Layout>
          </WagmiConfig>
        </BrowserRouter>
      </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
