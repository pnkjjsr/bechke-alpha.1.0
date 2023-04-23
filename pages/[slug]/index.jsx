import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";

import { Layout } from "@/layouts/seller";
import LoaderCircular from "@/components/Common/Progress/circular";

import Profile from "@/components/Profile/Normal";
import Banner from "@/components/Common/Slider/Banner";
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/Product/Card";

import Logo from "@/sections/[slug]/skelton/Logo";
import { getUser } from "@/sections/[slug]/firestore";
import s from "@/sections/[slug]/style.module.scss";

const products = [
  {
    name: "QNT Prime Whey Protein 4.4 Lbs",
    image: "/product/qnt-prime-whey-protein.png",
    mrp: "6899",
    selling: "5295",
    offer: "4295",
    type: "veg",
  },
  {
    name: "QNT Delicious Whey Protein",
    image: "/product/qnt-delicious-isolate-protein.png",
    mrp: "3149",
    selling: "2799",
    offer: "2290",
    type: "veg",
  },
  {
    name: "QNT Muscle Mass 3000 3Kg",
    image: "/product/QNT-Muscle-Mass-3000-3Kg-Front.jpg",
    mrp: "3899",
    selling: "3399",
    offer: "2655",
    type: "nonveg",
  },
];

const demoImages = [
  {
    sm: "/images/banner/karwachauth-sm.jpg",
    lg: "/images/banner/karwachauth-lg.jpg",
    xl: "/images/banner/karwachauth-xl.jpg",
    name: "Karwa Chauth Special Offer",
    product: products[0],
  },
  {
    sm: "/images/banner/navratri-sm.jpg",
    lg: "/images/banner/navratri-lg.jpg",
    xl: "/images/banner/navratri-xl.jpg",
    name: "Navratri Offer",
    product: products[1],
  },
  {
    sm: "/images/banner/diwali-sm.jpg",
    lg: "/images/banner/diwali-lg.jpg",
    xl: "/images/banner/diwali-xl.jpg",
    name: "Diwali Special Offer",
    product: products[2],
  },
];

function Seller(props) {
  const router = useRouter();
  const { slug } = props.params;
  const user = props.user;

  const renderProduct = () => {
    return products.map((item, i) => {
      return <ProductCard key={i} product={item} />;
    });
  };

  useEffect(() => {});

  return (
    <>
      <Layout>
        <div className={s.seller}>
          <Logo user={user} />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const cookies = nookies.get(context);
  const user = await getUser(cookies.uid);

  return {
    props: { params, user },
  };
}

export default Seller;
