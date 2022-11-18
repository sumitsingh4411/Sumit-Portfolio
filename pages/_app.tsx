import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Multimedia from "../common/component/multimedia/Multimedia";
import Mail from "../common/component/mail/Mail";
import Footer from "../components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="main_container">
      <Header />
      <Multimedia />
      <Mail />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
