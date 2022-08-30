import React from "react";

import s from "./style.module.scss";

export const Subscribe = () => {
  return (
    <div className={s.subscribe}>
      <h4>To know more about the service</h4>

      <div className={s.form}>
        <form action="">
          <input type="text" placeholder="Your Email Id" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};
