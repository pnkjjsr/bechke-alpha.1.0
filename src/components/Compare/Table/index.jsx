import React from "react";

import s from "./style.module.scss";

const tableData = [
  {
    label: "First Time Fee",
    bechke: "Rs.0, bechke is monthly subscription service.",
    others: "50K to few Lakhs, as how big ecommerce platform build.",
  },
  {
    label: "Monthly Fee",
    bechke: "Start from Rs.499 to Rs.2999 as per client requirment.",
    others: "Start from Rs.5,000 to Rs.10,000 as per ecommerce platform.",
  },
  {
    label: "Product Catalog",
    bechke: "Bechke's team responsiblity to update product for you.",
    others:
      "Company charge your first for this and after they ask money for every single change.",
  },
  {
    label: "Free SEO",
    bechke: "Every page has 100% in-page SEO for you.",
    others: "They just add your more charges for this.",
  },
  {
    label: "Free Hosting",
    bechke: "Its Free! you don't have to care about hosting expense.",
    others:
      "They charge you for hosting and as big your platform is big they payment.",
  },
  {
    label: "Free Technology Support*",
    bechke:
      "Our technology team is continuously working on your feedback and the response time for your enquiry/improvement is less than 30 mintues",
    others: "They charge as per your changes and requirment.",
  },
  {
    label: "Free Analytics",
    bechke:
      "Get all the stats about your 'page view', 'product view', 'total visitor'.",
    others: "Analytics, again they charge as per your need of requirment.",
  },
];

export const Compare = () => {
  const renderItems = () => {
    return tableData.map((item, key) => {
      return (
        <div className={s.tr} key={key}>
          <div className={s.td}>{item.label}</div>
          <div className={s.td}>{item.bechke}</div>
          <div className={s.td}>{item.others}</div>
        </div>
      );
    });
  };

  return (
    <section className={s.compare}>
      <h2>The Competition Can&apos;t Compete</h2>

      <div className={s.table}>
        <div className={s.tr}>
          <div className={s.td}></div>
          <div className={s.td}>Bechke</div>
          <div className={s.td}>Website Company</div>
        </div>
        {renderItems()}
      </div>
    </section>
  );
};
