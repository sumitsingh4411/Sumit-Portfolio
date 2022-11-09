import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideBar from "../components/sidebar/SideBar";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main_container">
      <Header />
      <div className="main_content_body">
        <SideBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
