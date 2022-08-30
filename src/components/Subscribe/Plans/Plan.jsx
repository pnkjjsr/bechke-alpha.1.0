import React, { useState } from "react";

import s from "./style.module.scss";

export const Plan = (props) => {
  const [type, setType] = useState(props.type);
  const [title, setTitle] = useState(props.title);
  const [sub, setSub] = useState(props.sub);
  const [price, setPrice] = useState(props.price);
  const [points, setPoints] = useState(props.points);

  const list = () => {
    return points.map((item, key) => {
      return <li key={key}>{item}</li>;
    });
  };

  let theme =
    type === "primary" ? s.primary : type === "secondary" ? s.secondary : "";

  return (
    <div className={`${s.plan} ${theme}`}>
      <h2>
        {title}
        <small>{sub}</small>
      </h2>

      <div className={s.price}>
        Rs.{price} <small>/month</small>
      </div>

      <div className={s.action}>
        <button className={s.outline}>Interested</button>
      </div>

      <ul className={s.points}>{list()}</ul>
    </div>
  );
};
