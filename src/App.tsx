import React from 'react';
import { AuthProvider } from './contexts/auth';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
