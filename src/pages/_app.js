
import Layout from "./component/Layout.js";
// import './styles/globals.css'; 
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
