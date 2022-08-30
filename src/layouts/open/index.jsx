import React from "react";

import { HeaderLayout } from "./Header";
import { FooterLayout } from "./Footer";

import s from "./index.module.scss";

export const Layout = (props) => {
  return (
    <>
      <HeaderLayout />
      <main className={s.main}>{props.children}</main>
      <FooterLayout />
    </>
  );
};