import Head from 'next/head'

import { Feature } from "@/components/Feature/bechke"
import { Compare } from "@/components/Compare/Table"
import { Subscriptions } from "@/components/Subscribe/Plans"

import s from '@/sections/index/style.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bechke | Supplement Shop Online Service</title>
        <meta name="description" content="No more expensive Website and hassle free maintenance" />
      </Head>

      <div className={s.home}>
        <h1>Your online store, our responsibility.</h1>

        <Feature />

        <Compare />

        <Subscriptions />
      </div>
    </>
  )
}
