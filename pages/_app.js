import Layout from "../components/layout";
import { ProductsContextProvider } from "../src/context/Products";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ProductsContextProvider>
  );
}

export default MyApp;
