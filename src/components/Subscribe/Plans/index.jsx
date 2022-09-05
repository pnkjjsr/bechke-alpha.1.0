import React, { useState } from "react";

import ModalHOC from "@/components/Common/Modal/transition";
import SubscribeForm from "@/components/Form/Subscribe";

import { Plan } from "./Plan";

import s from "./style.module.scss";

const plansData = [
  {
    variant: "free",
    title: "FREE - 5 Products Shop",
    sub: "Essential features to digitalize your business",
    price: "0",
    points: [
      "Online store link, bechke.com/your_store",
      "5 product space to show in your catalog",
    ],
  },
  {
    variant: "499",
    type: "primary",
    title: "15 Products Shop",
    sub: "Essential features and 15 products space",
    price: "499",
    points: [
      "Online store link, bechke.com/your_store",
      "15 product space, already made for you",
      "1 home page offer banner",
      "1 home page offer Slider with 3 product",
      "24*7 whatsapp support",
    ],
  },
  {
    variant: "999",
    type: "secondary",
    title: "50 Products Shop",
    sub: "Essential features and 50 products space",
    price: "999",
    points: [
      "Online store link, bechke.com/your_store",
      // "Online store link, your_store.bechke.com",
      "50 product space, already made for you",
      "3 home page offer banner",
      "2 home page offer Slider with 3 product",
      "24*7 whatsapp support",
    ],
  },
  {
    variant: "1499",
    title: "100 Products Shop",
    sub: "Essential features and 100 products space",
    price: "1499",
    points: [
      "Online store link, bechke.com/your_store",
      // "Online store link, your_store.bechke.com",
      "100 product space, already made for you",
      "5 home page offer banner",
      "2 home page offer Slider with 7 product",
      "24*7 whatsapp support",
    ],
  },
  {
    variant: "1999",
    title: "Unlimited Products Shop",
    sub: "Unlimited products space",
    price: "1999",
    points: [
      "Online store link, bechke.com/your_store",
      // "Online store link, your_store.bechke.com",
      "Unlimited product space, already made for you",
      "10 home page offer banner",
      "3 home page offer Slider with 10 product",
      "24*7 whatsapp support",
    ],
  },
  {
    variant: "2999",
    title: "100% Your Brand",
    sub: "Unlimited products space",
    price: "2999",
    points: [
      "Online store link, www.your_store.com",
      // "Online store link, your_store.bechke.com",
      "Unlimited product space, already made for you",
      "10 home page offer banner",
      "3 home page offer Slider with 10 product",
      "24*7 whatsapp support",
    ],
  },
];

export const Subscriptions = () => {
  const [modalTitle, setModalTitle] = useState();
  const [variant, setVariant] = useState();
  const [openFn, setOpenFn] = useState();
  const [closeFn, setCloseFn] = useState();

  const modalOpen = (fn) => setOpenFn(() => fn);
  const modalClose = (fn) => setCloseFn(() => fn);
  const submitCallback = () => closeFn();

  const handleModal = (type, title) => {
    setModalTitle(title);
    setVariant(type);
    openFn();
  };

  const renderPlans = () => {
    return plansData.map((item, key) => {
      return (
        <Plan
          key={key}
          variant={item.variant}
          type={item.type}
          title={item.title}
          sub={item.sub}
          price={item.price}
          points={item.points}
          action={handleModal}
        />
      );
    });
  };

  return (
    <div className={s.plans}>
      <h2>Subscription Plans</h2>

      <div className={s.item}>{renderPlans()}</div>

      <ModalHOC
        title={modalTitle}
        text=""
        openFn={modalOpen}
        closeFn={modalClose}
      >
        <SubscribeForm type={variant} callback={submitCallback} />
      </ModalHOC>
    </div>
  );
};
