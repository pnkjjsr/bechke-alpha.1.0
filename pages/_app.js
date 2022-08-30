import React, { useEffect } from "react";
import Head from "next/head";

import { analytics } from "@/libs/firebase";

import { Layout } from "@/layouts/open/index";

import "@/styles/global.scss"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="No more expensive Website and hassle free maintenance" />
        <meta name="keywords" content="Keywords" />
        <title>Bechke | Supplement Shop Online Service</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.ico" rel="icon" type="image/ico" sizes="16x16" />
        <link
          href="/pwa-icons/32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/pwa-icons/32x32.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}

export default MyApp
