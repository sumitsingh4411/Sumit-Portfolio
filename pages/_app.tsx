import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Multimedia from "../common/component/multimedia/Multimedia";
import Mail from "../common/component/mail/Mail";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import HeaderMobile from "../components/header/mobile/HeaderMobile";
import { Analytics } from "@vercel/analytics/react";
import useWindowWidth from "../common/hooks/useWindowWidth";
import { DEVICE_TYPE } from "../common/constant";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  const windowWidth = useWindowWidth();
  return (
    <div className="main_container">
      {windowWidth > DEVICE_TYPE.MOBILE ? <Header /> : <HeaderMobile />}
      {windowWidth > DEVICE_TYPE.MOBILE && <Multimedia />}
      {windowWidth > DEVICE_TYPE.MOBILE && <Mail />}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Analytics />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default MyApp;
