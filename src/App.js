import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Importante que o reactotron venha
// antes do store
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
