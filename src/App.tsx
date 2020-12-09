import React from 'react';
import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/auth';
import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>

      <ToastContainer />

      <GlobalStyle />
    </>
  );
}

export default App;
