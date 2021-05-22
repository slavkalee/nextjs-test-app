import React from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider } from 'react-redux';
import initializeStore from '../redux/store';

import '../styles/main.scss';

const store = initializeStore();

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
