import React, { useState } from "react";
import Image from "next/image";

import ModalHOC from "@/components/Common/Modal/transition";
import SliderHOC from "@/components/Common/Slider/CarouselText";

import s from "./style.module.scss";

const demoImages = [
  {
    label: "Home Page",
    imgPath: "/images/demo/home.png",
  },
  {
    label: "Product Page",
    imgPath: "/images/demo/product.png",
  },
  {
    label: "Account",
    imgPath: "/images/demo/account.png",
  },
  {
    label: "Update Logo",
    imgPath: "/images/demo/update-logo.png",
  },
  {
    label: "Add Product",
    imgPath: "/images/demo/add-product.png",
  },
  {
    label: "Update Product",
    imgPath: "/images/demo/update-product.png",
  },
  {
    label: "Add Banner",
    imgPath: "/images/demo/add-banner.png",
  },
  {
    label: "Update Banner",
    imgPath: "/images/demo/update-banner.png",
  },
];

export const Feature = () => {
  const [openFn, setOpenFn] = useState();
  const [closeFn, setCloseFn] = useState();

  const modalOpen = (fn) => setOpenFn(() => fn);
  const modalClose = (fn) => setCloseFn(() => fn);

  const handleDemo = () => openFn();

  return (
    <div className={s.feature}>
      <figure>
        <Image
          src="/images/b_feature.png"
          alt="Bechke feature banner"
          width="335"
          height="158"
        />
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
      <button onClick={handleDemo}>DEMO</button>

      <ModalHOC title="Demo" text="" openFn={modalOpen} closeFn={modalClose}>
        <SliderHOC slides={demoImages} />
      </ModalHOC>
    </div>
  );
};
