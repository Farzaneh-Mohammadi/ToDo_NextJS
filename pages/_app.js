import { Provider } from "react-redux";
import "../styles/globals.css";

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

      <ToastContainer />
      <Component {...pageProps} />
      </PersistGate>

    </Provider>
  );
}

export default MyApp;



