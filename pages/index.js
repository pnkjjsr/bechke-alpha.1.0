import React, { useState, useEffect, useContext } from "react";
import Link from 'next/link'
import {
  setDoc,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { AuthContext } from "@/contexts/Auth";
import { db } from "@/libs/firebase";
import { getUID } from "@/utils/sessions"

import { Layout } from "@/layouts/open/index";
import { Feature } from "@/components/Feature/bechke"
import { Compare } from "@/components/Compare/Table"
import { Subscriptions } from "@/components/Subscribe/Plans"
import ClientSection from "@/components/Client/Section"
import OAuth from "@/components/Common/OAuth";
import ModalHOC from "@/components/Common/Modal/transition";

import s from '@/sections/index/style.module.scss'

export default function Home() {
  const { authenticated, setAuthenticated, profile, setProfile } =
    useContext(AuthContext);
  const [link, setLink] = useState("");

  const [openFn, setOpenFn] = useState();
  const [closeFn, setCloseFn] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const modalOpen = (fn) => setOpenFn(() => fn);
  const modalClose = (fn) => setCloseFn(() => fn);
  const submitCallback = () => closeFn();



  const isLinkName = async () => {
    let uid = getUID();
    if (uid) {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      let data = docSnap.data();
      if (data.linkName) setLink(data.linkName)
    }
    else {
      return false;
    }
  }

  const renderAction = () => {
    return (
      <div className={s.action}>
        {authenticated &&
          (!link &&
            (
              <Link href="/setup">
                <a className={s.setup}>
                  Setup Online Shop
                </a>
              </Link>
            ) || (
              <Link href={link}>
                <a className={s.setup}>
                  Check Website
                </a>
              </Link>
            )) || (
            <button className={s.open} onClick={openFn}>
              Open Now
              <small>
                Your&apos;s Free Website
              </small>
            </button>)}
      </div>
    )
  }

  useEffect(() => {
    isLinkName();
  }, []);

  return (
    <>
      <Layout>
        <div className={s.home}>
          <h1>Your online store, our responsibility.</h1>

          {renderAction()}

          <Feature />

          <Compare />

          <ClientSection />


          <Subscriptions />
        </div>

        <ModalHOC title="Login" text="" openFn={modalOpen} closeFn={modalClose}>
          <OAuth callback={submitCallback} />
        </ModalHOC>
      </Layout>
    </>
  )
}