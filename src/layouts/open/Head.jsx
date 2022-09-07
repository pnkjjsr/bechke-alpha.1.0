import React, { Fragment } from "react";
import NextHead from "next/head";

import { string } from "prop-types";

const DEFAULT_CONFIG = {
  title: "Bechke - Zero Fees On Your Sales - We Provide Technology Support As Like Your Mini Startup",
  desc: "Bechke.com, is an online service for small shop owners. We provide them full technology support to do their business online.",
  keyword: "Bechke,BechkeApp,Supplement,Supplement Shop,Small Seller",
  defaultOGURL: "https://www.bechke.com",
  defaultOGImage: "/images/b_feature.png",
  defaultDescription:
    "Bechke.com, is an online service for small shop owners. We provide them full technology support to do their business online.",
};

class Head extends React.Component {
  render() {
    return (
      <Fragment>
        <NextHead>
          <title>{DEFAULT_CONFIG.title}</title>
          <meta name="description" content={DEFAULT_CONFIG.desc} />
          <meta name="keywords" content={DEFAULT_CONFIG.keyword}></meta>

          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="application-name" content="Bechke App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Bechke App" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#66C1DE" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          {/* <meta
            name="google-site-verification"
            content="X_UAViRRJK8KBMJtpV6wJmolpk-h5vIn8ooaBt7AHL0"
          /> */}

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@bechkeApp" />
          <meta name="twitter:creator" content="@bechkeApp" />

          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            name="apple-mobile-web-app-capable"
            content="black-translucent"
          />

          <link rel="icon" sizes="192x192" href="/pwa-icons/icon-192.png" />
          <link rel="apple-touch-icon" href="/pwa-icons/32x32.png" />
          <link rel="mask-icon" href="/pwa-icons/icon-32.png" color="#49B882" />
          <link
            href="pwa-icons/icon-32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="icon" href="/favicon.ico" type="image/ico" sizes="16x16" />
          <link rel="manifest" href="/manifest.json" />
        </NextHead>

        <noscript>
          <div className="alert  alert-warning">
            <h4>Warning!</h4>
            <h5>Javascript is disabled for this website.</h5>
            <p>Javascript is required to use this website.</p>
            <p>
              {`You won't be able to navigate in this website until you activate javascript.`}
            </p>
          </div>
        </noscript>
      </Fragment>
    );
  }
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
