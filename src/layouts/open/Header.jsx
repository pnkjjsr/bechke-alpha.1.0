import React from "react";
import Link from "next/link";

import s from "./header.module.scss";

export const HeaderLayout = (props) => {
  return (
    <div className={s.header}>
      <span>
        <Link href="/">
          <a>Bechke</a>
        </Link>

        <small>alpha 0.1</small>
      </span>
    </div>
  );
};
