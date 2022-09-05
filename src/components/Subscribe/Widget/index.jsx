import React, { useState, useRef } from "react";

import { db } from "@/libs/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import validation from "./validation";

import Snackbar from "@/components/Common/Snackbar";

import s from "./style.module.scss";

export const Subscribe = () => {
  const [snackbar, setSnackbar] = useState({
    description: "",
    severity: "",
  });
  const [toastOpen, setToastOpen] = useState(undefined);
  const emailRef = useRef();

  const handleValidation = (el) => {
    let email = el.value;
    const { valid, errors } = validation({ email });

    if (!valid) {
      setSnackbar({
        message: errors.email,
        description: errors["email"],
        severity: "error",
      });

      toastOpen();

      return false;
    }

    return true;
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    let el = emailRef.current;

    let isValid = handleValidation(el);
    if (!isValid) return;

    const colRef = collection(db, "subscribers");
    const queryRef = query(colRef, where("email", "==", el.value));
    const querySnapshot = await getDocs(queryRef);

    if (!querySnapshot.empty) {
      setSnackbar({
        description: "Congrats, already subscribed.",
        severity: "success",
      });
      return toastOpen();
    } else {
      const docRef = await addDoc(collection(db, "subscribers"), {
        createdate: new Date().toISOString(),
        email: el.value,
        type: "home-footer-widget",
      });

      await updateDoc(doc(db, "subscribers", docRef.id), { id: docRef.id });

      setSnackbar({
        description: "Subscribe successfully done!",
        severity: "success",
      });
      el.value = "";
      return toastOpen();
    }
  };

  const handleOpen = (fn) => {
    setToastOpen(() => fn);
  };

  return (
    <div className={s.subscribe}>
      <h4>To know more about the service</h4>

      <div className={s.form}>
        <form action="" onSubmit={handleSubscribe} noValidate>
          <input type="text" placeholder="Your Email Id" ref={emailRef} />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <Snackbar
        open={handleOpen}
        description={snackbar.description}
        severity={snackbar.severity}
      />
    </div>
  );
};
