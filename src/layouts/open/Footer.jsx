import React from "react";
import Link from "next/link";

import { Social } from "@/components/Social/Footer";
import { Subscribe } from "@/components/Subscribe/Widget";

import s from "./footer.module.scss";

export const FooterLayout = (props) => {
  return (
    <div className={s.footer}>
      <Subscribe />

      <Social />

      <div className={s.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </div>

      <div className={s.autherize}>© 2022 Bechke</div>
    </div>
  );
};
