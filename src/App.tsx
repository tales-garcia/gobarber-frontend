import React from 'react';

import AppProvider from './hooks';
import Routes from './routes/index.routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
