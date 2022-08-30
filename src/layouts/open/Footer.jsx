import React from "react";

import { Social } from "@/components/Social/Footer";
import { Subscribe } from "@/components/Subscribe/Widget";

import s from "./footer.module.scss";

export const FooterLayout = (props) => {
  return (
    <div className={s.footer}>
      <Subscribe />

      <Social />

      <div className={s.autherize}>© 2022 Bechke</div>
    </div>
  );
};
