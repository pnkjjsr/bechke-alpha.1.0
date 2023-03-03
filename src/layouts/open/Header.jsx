import React, { useState, useEffect } from "react";
import Link from "next/link";

import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

import OAuth from "@/components/Common/OAuth";
import ModalHOC from "@/components/Common/Modal/transition";

import s from "./header.module.scss";

export const HeaderLayout = (props) => {
  const [openFn, setOpenFn] = useState();
  const [closeFn, setCloseFn] = useState();

  const modalOpen = (fn) => setOpenFn(() => fn);
  const modalClose = (fn) => setCloseFn(() => fn);
  const submitCallback = () => closeFn();

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <span>
          <Link href="/">
            <a>Bechke</a>
          </Link>

          {/* <small>alpha 0.1</small> */}
        </span>
      </div>

      <div className={s.action}>
        <IconButton aria-label="Login" color="inherit" onClick={openFn}>
          <AccountCircle />
        </IconButton>
      </div>

      <ModalHOC title="Login" text="" openFn={modalOpen} closeFn={modalClose}>
        <OAuth />
      </ModalHOC>
    </div>
  );
};
