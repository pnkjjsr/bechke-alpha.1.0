import React from "react";
import { Layout } from "@/layouts/open/index";
import { Feature } from "@/components/Feature/bechke"
import { Compare } from "@/components/Compare/Table"
import { Subscriptions } from "@/components/Subscribe/Plans"
import ClientSection from "@/components/Client/Section"

import s from '@/sections/index/style.module.scss'

export default function Home() {
  return (
    <>
      <Layout>
        <div className={s.home}>
          <h1>Your online store, our responsibility.</h1>

          <Feature />

          <Compare />

          <ClientSection />
          

          <Subscriptions />
        </div>
      </Layout>
    </>
  )
}
