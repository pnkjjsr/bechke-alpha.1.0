import React, { useState, useEffect } from "react";
import Link from "next/link";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
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
import Snackbar from "@/components/Common/Snackbar";

import { login } from "@/utils/sessions";
import validation from "./validation";

import s from "./style.module.scss";

export default function Login(props) {
  const [form, setForm] = useState({
    mobile: "",
    mobileErr: false,
    mobileErrText: "",
    otp: "",
    otpErr: false,
    otpErrText: "",
  });
  const [view_pwd, setView_pwd] = useState(false);

  const [snackbar, setSnackbar] = useState({
    description: "",
    severity: "",
  });
  const [toastOpen, setToastOpen] = useState(undefined);

  const handleOpen = (fn) => {
    setToastOpen(() => fn);
  };

  const parseUser = (user) => {
    return {
      id: user.uid,
      displayName: user.providerData[0].displayName,
      email: user.providerData[0].email,
      phoneNumber: user.providerData[0].phoneNumber,
      photoURL: user.providerData[0].photoURL,
      providerId: user.providerData[0].providerId,
    };
  };

  const handleMobile = () => {
    const phoneNumber = `+91${form.mobile}`;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;

        setView_pwd(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleVerify = () => {
    const code = form.otp;
    if (!form.otp || form.otpErr) {
      setSnackbar({
        description: "Please enter correct OTP",
        severity: "error",
      });

      toastOpen();
      return false;
    }

    confirmationResult
      .confirm(code)
      .then((result) => {
        let user = parseUser(result.user);
        post(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        let user = parseUser(result.user);
        post(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;
        let user = parseUser(result.user);
        post(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
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

  const handleSubmitValidation = () => {
    const { mobile, mobileErr } = form;

    if (!mobile || mobileErr) {
      setSnackbar({
        description: "Please enter mobile number",
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

    handleMobile();
    // if (isMobile(form.mobile)) handleMobile();
    // else if (isEmail(form.mobile)) console.log("email ", form.mobile);
  };

  const post = async (user) => {
    let postData = {
      createdate: new Date().toISOString(),
      ...user,
    };

    const docRef = doc(db, "users", postData.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
    } else {
      // console.log("No such document!");
      await setDoc(doc(db, "users", postData.id), postData);
    }

    login(postData);

    setSnackbar({
      description: "Successfully logged in, you will redirect soon.",
      severity: "success",
    });

    setForm({ mobile: "", otp: "" });
    setTimeout(() => props.callback(), 1000);
    return toastOpen();
  };

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in",
      {
        size: "invisible",
        callback: (response) => {
          // console.log("prepared phone auth process");
          // handleSubmit();
        },
      },
      auth
    );
  }, []);

  const renderPassword = () => {
    if (!view_pwd) {
      return (
        <>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile number"
              variant="outlined"
              name="mobile"
              type="tel"
              inputProps={{
                pattern: "[1-9]{1}[0-9]{9}",
                maxLength: "10",
              }}
              onChange={handleChange}
              error={form.mobileErr}
              helperText={form.mobileErrText}
              value={form.mobile}
            />
          </Grid>

          <Grid className={s.action} item xs={12}>
            <button id="sign-in" type="submit">
              Login
            </button>
          </Grid>
        </>
      );
    } else {
      return (
        <>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={`Enter OTP code sent to you at ${form.mobile}`}
              variant="outlined"
              name="otp"
              type="number"
              inputProps={{
                pattern: "[1-9]{1}[0-9]{9}",
                maxLength: "6",
              }}
              onChange={handleChange}
              error={form.otpErr}
              helperText={form.otpErrText}
              value={form.otp}
            />
          </Grid>

          <Grid className={s.action} item xs={12}>
            <button id="sign-in" type="submit" onClick={handleVerify}>
              Verify
            </button>
          </Grid>
        </>
      );
    }
  };

  return (
    <div className={s.form}>
      <form action="" onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid container spacing={2}>
          {renderPassword()}

          <Grid item xs={12}>
            <Divider sx={{ m: 0 }}>
              <Chip label="Or" />
            </Divider>
          </Grid>

          <Grid item xs={12}>
            <Stack
              spacing={{ xs: 1, sm: 2, md: 3 }}
              direction={{ xs: "column", sm: "row" }}
              justifyContent={{ sm: "center" }}
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<GoogleIcon />}
                onClick={handleGoogle}
              >
                Google
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<FacebookIcon />}
                onClick={handleFacebook}
              >
                Facebook
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <div className={s.terms}>
              <label htmlFor="terms">
                {/* <Link href="#"> */}
                <a target="_blank">Terms &amp; condition apply</a>
                {/* </Link> */}

                <small>
                  By login you understand, subscribe and accept all the ‘terms
                  &amp; condition’ and ‘privacy policy’.
                </small>
              </label>
            </div>
          </Grid>
        </Grid>
      </form>

      <Snackbar
        open={handleOpen}
        description={snackbar.description}
        severity={snackbar.severity}
      />
    </div>
  );
}
