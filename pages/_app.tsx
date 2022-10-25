import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main_container">
      <SideBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
