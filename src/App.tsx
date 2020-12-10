import React from 'react';

import AppProvider from './hooks';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
