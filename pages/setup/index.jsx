import React, { Component } from "react";
import nookies from "nookies";

import { Layout } from "@/layouts/open/index";

import SetupForm from "@/components/Form/Setup"

import s from "@/sections/setup/style.module.scss";

export default class Setup extends Component {
  render() {
    return (
      <Layout>
        <div>
            <SetupForm />
        </div>
      </Layout>
    );
  }
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  let uid = cookies.uid;

  if (!uid) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
