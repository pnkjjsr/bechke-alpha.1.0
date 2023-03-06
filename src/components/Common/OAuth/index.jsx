import React, { useEffect } from "react";

import LoginForm from "@/components/Form/Login";

import s from "./style.module.scss";

function OAuth(props) {
  useEffect(() => {}, []);

  return (
    <div className={s.oauth}>
      <div className={s.header}>
        <h5>
          Welcome to Bechke.com
          <br />
          <small>Software so easy, everyone can do it.</small>
        </h5>
      </div>

      <LoginForm callback={props.callback} />
    </div>
  );
}

export default OAuth;
