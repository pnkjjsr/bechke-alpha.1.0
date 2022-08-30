import React from "react";

import s from "./header.module.scss";

export const HeaderLayout = (props) => {
  return (
    <div className={s.header}>
      <span>
        Bechke
        <small>alpha 0.1</small>
      </span>
    </div>
  );
};
