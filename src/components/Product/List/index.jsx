import React from "react";
import Image from "next/image";

import s from "./style.module.scss";

function ListProduct(props) {
  const { product } = props;

  return (
    <div className={s.product}>
      <figure>
        <Image src={product.image} alt={product.name} width="72" height="72" />
      </figure>

      <div className={s.details}>
        <h6 className={s.name}>{product.name}</h6>
        <div className={s.price}>Price: Rs.{product.offer}</div>
      </div>
    </div>
  );
}

export default ListProduct;
