import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
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

import { auth, db } from "@/libs/firebase";
import { getUID } from "@/utils/sessions";
import Snackbar from "@/components/Common/Snackbar";

import s from "./style.module.scss";

export default function Setup() {
  const router = useRouter();
  const [form, setForm] = useState({
    brand: "",
    brandErr: "",
  });
  const [linkname, setLinkname] = useState("");
  const [snackbar, setSnackbar] = useState({
    description: "",
    severity: "",
  });
  const [toastOpen, setToastOpen] = useState(undefined);

  const handleOpen = (fn) => {
    setToastOpen(() => fn);
  };

  const handleChange = (e) => {
    let el = e.target;
    let val = el.value;
    let name = el.name;
    let linkname = val.replace(/\s/g, "");

    let err = `${el.name}Err`;

    setForm({ ...form, [name]: val, [err]: false });
    setLinkname(linkname);
  };

  const handleSubmitValidation = () => {
    const { brand, brandErr } = form;
    let brandLen = brand.length;

    if (brandErr || !brand || brand == "<brand>") {
      setSnackbar({
        description: "Brand shouldn't be empty",
        severity: "error",
      });

      toastOpen();
      return false;
    } else if (brandLen <= 2) {
      setSnackbar({
        description: "Brand name should be 3 character",
        severity: "error",
      });

      toastOpen();
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = handleSubmitValidation();
    if (!valid) return;
    post();
  };

  const post = async () => {
    const { brand } = form;

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("linkName", "==", linkname));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      let postData = {
        updatedate: new Date().toISOString(),
        brandName: brand,
        linkName: linkname,
      };

      let uid = getUID();
      const docRef = doc(db, "users", uid);
      await updateDoc(docRef, postData);

      setSnackbar({
        description: "You're all set! Redirecting to your brand page",
        severity: "success",
      });

      router.push(linkname);

      // setForm({ brand: "", brandErr: "" });
      // setLinkname("");
    } else {
      setSnackbar({
        description: "This brand name is already taken!",
        severity: "warning",
      });
    }

    return toastOpen();
  };

  useEffect(() => {}, []);

  return (
    <div className={s.form}>
      <div className={s.header}>
        <h1 className={s.heading}>
          Setup your brand&apos;s website in simple steps.
          <small>Open business for the world!</small>
        </h1>
      </div>

      <form action="" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Enter your shop/brand name"
          onChange={handleChange}
          name="brand"
          value={form.brand}
        />
        <span className={s.helper}>
          &quot;bechke.com/<b>{linkname}</b>&quot;, this is your online shop link.
        </span>

        <div className={s.action}>
          <button type="submit">Lets Start!</button>
        </div>
      </form>

      <Snackbar
        open={handleOpen}
        description={snackbar.description}
        severity={snackbar.severity}
      />
    </div>
  );
}
