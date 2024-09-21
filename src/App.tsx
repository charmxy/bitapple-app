import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ConfigProvider } from "antd";
import { routes } from "@/router/index";
import Layout from "@/layouts/Layout";

function App() {
  let client = new ApolloClient({
    uri: "",
    cache: new InMemoryCache()
  });

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
          <Layout>
            <Routes>
              {routes.map(route => (
                <Route key={route.path} {...route} />
              ))}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ConfigProvider>
    </ApolloProvider>
  );
}

export default App;
