import React from "react";
import Image from "next/image";

import s from "./style.module.scss";

export const Feature = () => {
  return (
    <div className={s.feature}>
      <figure>
        <Image src="/images/b_feature.png" alt="Bechke feature banner" width="335" height="158" />
      </figure>

      <h2>No more expensive Website and hassle free maintenance </h2>

      <ul>
        <li>
          <span>100+ Products on your one click</span>
        </li>
        <li>
          <span>All the maintance work done by us</span>
        </li>
        <li>
          <span>We work for you, like your miny start-up</span>
        </li>
        <li>
          <span>No fees on your sales - ever</span>
        </li>
        <li>
          <span>Affordable - 95% cheaper than competitors</span>
        </li>
      </ul>

      <h2 className={s.second}>Free Introduction to the world of startup.</h2>
      <button>DEMO</button>
    </div>
  );
};
