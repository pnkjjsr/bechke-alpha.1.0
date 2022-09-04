import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import s from "./style.module.scss";

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },

    MuiAlert: {
      defaultProps: {
        message: {},
      },
    },
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <ThemeProvider theme={theme}>
      <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    </ThemeProvider>
  );
});

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    vertical: "bottom",
    horizontal: "center",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const { vertical, horizontal } = state;

  React.useEffect(() => {
    props.open(handleOpen);
  }, []);

  return (
    <div className={s.snackbar}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={props.description}
        action={action}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={props.severity}>
          {props.description}
        </Alert>
      </Snackbar>
    </div>
  );
}
