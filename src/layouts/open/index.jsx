import React from "react";

import Head from "./Head";
import { HeaderLayout } from "./Header";
import { FooterLayout } from "./Footer";

import s from "./index.module.scss";

export const Layout = (props) => {
  return (
    <>
      <Head />

      <HeaderLayout />
      <main className={s.main}>{props.children}</main>
      <FooterLayout />
    </>
  );
};
