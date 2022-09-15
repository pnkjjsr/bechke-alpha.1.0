import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import ListProduct from "@/components/Product/List";

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

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import Snackbar from "@/components/Common/Snackbar";

import validation from "./validation";

import s from "./style.module.scss";

const label = {
  inputProps: { "aria-label": "Checkbox demo", htmlFor: "terms" },
};

export default function Interest(props) {
  const { product } = props;
  const [form, setForm] = useState({
    mobile: "",
    mobileErr: false,
    mobileErrText: "",
    email: "",
    emailErr: false,
    emailErrText: "",
    message: "",
    term: true,
  });

  const [snackbar, setSnackbar] = useState({
    description: "",
    severity: "",
  });
  const [toastOpen, setToastOpen] = useState(undefined);

  const handleOpen = (fn) => {
    setToastOpen(() => fn);
  };

  const handleValidation = (el) => {
    const { valid, errors } = validation(el);
    let err = `${el.name}Err`;
    let errText = `${el.name}ErrText`;

    let val = el.value;
    let name = el.name;

    if (!valid) {
      setForm({
        ...form,
        [name]: val,
        [err]: true,
        [errText]: errors[el.name],
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    let el = e.target;
    let val = el.value;
    let name = el.name;

    let isValid = handleValidation(el);
    if (!isValid) return;

    let err = `${el.name}Err`;
    let errText = `${el.name}ErrText`;

    setForm({ ...form, [name]: val, [err]: false, [errText]: "" });
  };

  const handleTerm = (e) => {
    let val = e.target.checked;
    setForm({ ...form, term: val });
  };

  const handleSubmitValidation = () => {
    const { mobile, mobileErr, email, emailErr, term } = form;

    if (mobileErr || emailErr || !mobile || !email) {
      setSnackbar({
        description: "Please correct the form",
        severity: "error",
      });

      toastOpen();
      return false;
    } else if (!term) {
      setSnackbar({
        description: "Please check 'Term & Condition'",
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
    const { mobile, email, name, message } = form;

    let postData = {
      createdate: new Date().toISOString(),
      mobile,
      email,
      name,
      message,
      type: "catlog-card-enquiry",
    };

    // const docRef = await addDoc(collection(db, "customers"), postData);
    // await updateDoc(doc(db, "customers", docRef.id), { id: docRef.id });

    window.open(
      `https://wa.me/919210882260?text=https://www.bechke.com/rahulfitness | ${message}, I'm interested to buy: ${product.name} at Rs.${product.offer}. My contact: ${mobile} | ${email}`,
      "_blank"
    );

    setSnackbar({
      description: "Thank you! for the interest, we will contact you soon",
      severity: "success",
    });

    setForm({ mobile: "", email: "", message: "" });
    setTimeout(() => props.callback(), 7000);
    return toastOpen();
  };

  const { mobile, email, message } = form;
  return (
    <div className={s.form}>
      <div className={s.product}>
        <ListProduct product={product} />
      </div>

      <form action="" onSubmit={handleSubmit} noValidate autoComplete="off">
        <div>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                type="tel"
                variant="outlined"
                name="mobile"
                onChange={handleChange}
                inputProps={{
                  pattern: "[1-9]{1}[0-9]{9}",
                  maxLength: "10",
                }}
                error={form.mobileErr}
                helperText={form.mobileErrText}
                value={mobile}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email Id"
                type="email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                error={form.emailErr}
                helperText={form.emailErrText}
                value={email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Message"
                variant="outlined"
                name="message"
                onChange={handleChange}
                value={message}
              />
            </Grid>
          </Grid>
        </div>

        <div className={s.action}>
          <div className={s.terms}>
            <Checkbox onChange={handleTerm} {...label} defaultChecked />
            <label htmlFor="terms">
              {/* <Link href="#"> */}
              <a target="_blank">Terms &amp; condition apply!</a>
              {/* </Link> */}

              {/* <small>
                  By submitting you understand, subscribe and accept all the
                  ‘terms &amp; condition’ and ‘privacy policy’.
                </small> */}
            </label>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
          >
            <WhatsAppIcon /> I Want To Buy
          </Button>
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
