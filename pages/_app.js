import React, { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/styles/theme"

import { analytics } from "@/libs/firebase";
import { Layout } from "@/layouts/open/index";

import "@/styles/global.scss"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
  }, []);

  return (
    <>
      {/* <CssBaseline enableColorScheme /> */}

      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>

  )
}

export default MyApp
