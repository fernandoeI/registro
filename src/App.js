import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUp from './pages/SignUp';
import ValidateQr from './pages/ValidateQr';
import "react-toastify/dist/ReactToastify.css";
import InvalidBrowser from './pages/InvalidBrowser';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/validar" element={<ValidateQr />} />
        <Route path="/invalid-browser" element={<InvalidBrowser />} />
      </Routes>
      <CssBaseline />
      <ToastContainer theme="dark" />
    </ThemeProvider>
  );
};

export default App;