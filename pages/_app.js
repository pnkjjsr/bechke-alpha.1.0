import React, { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/styles/theme"

import { AuthProvider } from "@/contexts/Auth";

import { analytics, messaging } from "@/libs/firebase";

import "@/styles/global.scss"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
    messaging;
  }, []);

  return (
    <>
      {/* <CssBaseline enableColorScheme /> */}

      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>

  )
}

export default MyApp
