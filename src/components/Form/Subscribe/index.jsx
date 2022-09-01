import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import s from "./style.module.scss";

const label = { inputProps: { "aria-label": "Checkbox demo", for: "terms" } };

export default function Subscribe() {
  return (
    <div className={s.form}>
      <form action="">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              // size="small"
              label="Mobile Number"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              // size="small"
              label="Email Id"
              type="email"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Brand Name"
              type="text"
              variant="outlined"
              size=""
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              // size="small"
              label="Need customize plan? Please share!"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <div className={s.terms}>
              <Checkbox {...label} defaultChecked />
              <label htmlFor="terms">
                <Link href="#">
                  <a target="_blank">Terms &amp; condition apply</a>
                </Link>

                <small>
                  By submitting you understand, subscribe and accept all the
                  ‘terms &amp; condition’ and ‘privacy policy’.
                </small>
              </label>
            </div>
          </Grid>
        </Grid>

        <div className={s.action}>
          <button>Subscribe &amp; Start</button>
        </div>
      </form>
    </div>
  );
}
