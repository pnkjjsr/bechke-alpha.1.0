import React, { useState, useEffect, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";

import { AuthContext } from "@/contexts/Auth";

import ModalHOC from "@/components/Common/Modal/transition";

import UpdateLogo from "@/sections/[slug]/components/forms/Logo";
import s from "./style.module.scss";

export default function Logo(props) {
  const { authenticated, setAuthenticated, profile, setProfile } =
    useContext(AuthContext);
  const { brandName, brandPhoto } = props.user;

  const [brand, setBrand] = useState(brandName);
  const [caption, setCaption] = useState("");
  const [logo, setLogo] = useState(brandPhoto);

  const [openFn, setOpenFn] = useState();
  const [closeFn, setCloseFn] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const modalOpen = (fn) => setOpenFn(() => fn);
  const modalClose = (fn) => setCloseFn(() => fn);
  const submitCallback = (photo) => {
    setLogo(photo);
    closeFn();
  };

  const brandInitial = () => {
    let name = brand;
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    let initials = [...name.matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
    ).toUpperCase();

    return initials;
  };

  useEffect(() => {
    let initial = brandInitial();
    setCaption(initial);
  }, []);

  return (
    <>
      <div className={s.logo}>
        <div className={s.action}>
          <EditIcon fontSize="small" color="disabled" onClick={openFn} />
        </div>

        <figure>
          {logo ? (
            <Avatar alt={brand} src={logo} sx={{ width: 80, height: 80 }}>
              {caption}
            </Avatar>
          ) : (
            <figcaption>{brandInitial()}</figcaption>
          )}
        </figure>

        <h1>{brand}</h1>
      </div>

      <ModalHOC
        title="Update Your Brand Logo"
        text=""
        openFn={modalOpen}
        closeFn={modalClose}
      >
        <UpdateLogo
          brand={brand}
          logo={logo}
          caption={caption}
          callback={submitCallback}
        />
      </ModalHOC>
    </>
  );
}
