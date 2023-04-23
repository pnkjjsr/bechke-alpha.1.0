import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { getUID } from "@/utils/sessions";
import { fileToDataUri } from "@/utils/helpers/method";

import Snackbar from "@/components/Common/Snackbar";

import { updateBrandPhoto } from "@/sections/[slug]/firestore";
import s from "@/components/Form/style.module.scss";

Logo.propTypes = {
  brand: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  logo: PropTypes.string,
  callback: PropTypes.func.isRequired,
};

export default function Logo(props) {
  const { brand, logo, caption, callback } = props;
  const [dataUri, setDataUri] = useState(logo);

  const [snackbar, setSnackbar] = useState({
    description: "",
    severity: "",
  });
  const [toastOpen, setToastOpen] = useState(undefined);

  const handleOpen = (fn) => {
    setToastOpen(() => fn);
  };

  const handleUpload = (e) => {
    let uploadFile = e.target.files[0];

    if (!uploadFile) return setDataUri("");

    fileToDataUri(uploadFile).then((dataUri) => {
      setDataUri(dataUri);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let uid = getUID();

    if (!dataUri) {
      setSnackbar({
        description: "Please select brand image",
        severity: "error",
      });
      toastOpen();
    }

    updateBrandPhoto(uid, dataUri);

    setSnackbar({
      description: "Brand photo updated successfully",
      severity: "success",
    });
    toastOpen();

    setTimeout(() => {
      callback(dataUri);
    }, 3000);
  };

  return (
    <div className={s.form}>
      <form
        className={s.form}
        action=""
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div>
          <Grid container spacing={5} alignItems="flex-start">
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center" }}>
                <h2 className={s.title}>{brand}</h2>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Stack direction="column" alignItems="center" spacing={2}>
                <Avatar
                  alt={brand}
                  src={dataUri}
                  sx={{ width: 100, height: 100 }}
                >
                  {caption}
                </Avatar>

                <Button variant="outlined" component="label" size="large">
                  Upload your brand logo
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={handleUpload}
                  />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </div>

        <div className={s.action}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
          >
            Save
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
