import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import ModalHOC from "@/components/Common/Modal/transition";
import FormInterest from "@/components/Form/Interest";

import s from "./style.module.scss";

function Card(props) {
  const { product } = props;
  const [openFn, setOpenFn] = useState();
  const [closeFn, setCloseFn] = useState();

  const modalOpen = (fn) => setOpenFn(() => fn);
  const modalClose = (fn) => setCloseFn(() => fn);
  const submitCallback = () => closeFn();

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
        <Button
          fullWidth
          variant="contained"
          color="primary"
          size="small"
          onClick={openFn}
        >
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

      <ModalHOC
        title="I'm interested &amp; want to buy"
        text=""
        openFn={modalOpen}
        closeFn={modalClose}
      >
        <FormInterest product={product} callback={submitCallback} />
      </ModalHOC>
    </div>
  );
}

export default Card;
