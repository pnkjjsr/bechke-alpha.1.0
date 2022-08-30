import React from "react";

import { Plan } from "./Plan";

import s from "./style.module.scss";

const plansData = [
  {
    title: "FREE - 5 Products Shop",
    sub: "Essential features to digitalize your business",
    price: "0",
    points: [
      "Online store link, bechke.com/your_store",
      "5 product space to show in your catalog",
    ],
  },
  {
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
  const renderPlans = () => {
    return plansData.map((item, key) => {
      return (
        <Plan
          key={key}
          type={item.type}
          title={item.title}
          sub={item.sub}
          price={item.price}
          points={item.points}
        />
      );
    });
  };

  return (
    <div className={s.plans}>
      <h2>Subscription Plans</h2>

      <div className={s.item}>{renderPlans()}</div>
    </div>
  );
};
