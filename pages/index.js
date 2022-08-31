import React from "react";
import { Feature } from "@/components/Feature/bechke"
import { Compare } from "@/components/Compare/Table"
import { Subscriptions } from "@/components/Subscribe/Plans"

import s from '@/sections/index/style.module.scss'

export default function Home() {
  return (
    <>
      <div className={s.home}>
        <h1>Your online store, our responsibility.</h1>

        <Feature />

        <Compare />

        <Subscriptions />
      </div>
    </>
  )
}
