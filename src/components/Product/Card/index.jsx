import React from "react";
import Image from "next/image";
import GppGoodIcon from '@mui/icons-material/GppGood';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

import s from "./style.module.scss";

function Card(props) {
  const { product } = props;
  return (
    <div className={s.product}>
      <span className={s.off}>
        {Math.round(((product.mrp - product.offer) / product.mrp) * 100)}%
      </span>

      <span className={s.type}>
        <Image
          src={product.type === "veg" ? "/icons/veg.png" : "/icons/non-veg.png"}
          alt="Veg Product"
          width="18"
          height="18"
        />
      </span>

      <CardActionArea>
        <div className={s.image}>
          <figure>
            <img src={product.image} alt={product.name} />
          </figure>
        </div>

        <div className={s.name}>{product.name}</div>

        <ul className={s.price}>
          <li>
            <label htmlFor="MRP">MRP:</label>
            <span>Rs.{product.mrp}</span>
          </li>
          <li>
            <label htmlFor="Selling Price">Selling Price:</label>
            <span>Rs.{product.selling}</span>
          </li>
          <li className={s.offer}>
            <label htmlFor="Offer Price">Offer Price:</label>
            <span>Rs.{product.offer}</span>
          </li>
        </ul>
      </CardActionArea>

      <div className={s.action}>
        <Button fullWidth variant="contained" color="primary" size="small">
          Send Enquiry
        </Button>
      </div>

      <ul className={s.feature}>
        <li>
          <i>
            <GppGoodIcon />
          </i>
          <span>100% Genuine</span>
        </li>
        <li>
          <i>
            <WorkspacePremiumIcon />
          </i>
          <span>Authenticity Guarantee</span>
        </li>
      </ul>
    </div>
  );
}

export default Card;
