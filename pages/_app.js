import { Provider } from 'react-redux';
import initializeStore from '../redux/store';

import '../styles/main.scss';

const store = initializeStore();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
