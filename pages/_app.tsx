import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Multimedia from "../common/component/multimedia/Multimedia";
import Mail from "../common/component/mail/Mail";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import useWindowWidth from "../common/useWindowWidth";
import HeaderMobile from "../components/header/mobile/HeaderMobile";

function MyApp({ Component, pageProps }: AppProps) {
  const windowWidth = useWindowWidth();
  return (
    <div className="main_container">
      {windowWidth > 768 ? <Header /> : <HeaderMobile />}
      {windowWidth > 768 && <Multimedia />}
      {windowWidth > 768 && <Mail />}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
