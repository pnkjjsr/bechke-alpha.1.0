import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const DialogTransition = styled(Dialog)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    top: "inherit",
    height: "90vh",

    ".MuiDialog-container": {
      borderTopRightRadius: theme.spacing(2),
      borderTopLeftRadius: theme.spacing(2),
      overflow: "hidden",
    },
  },
  ".MuiDialogTitle-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    fontSize: theme.typography.htmlFontSize + 4,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalHOC(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [maxWidth, setMaxWidth] = useState("sm");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    props.openFn(handleOpen);
    props.closeFn(handleClose);
  }, []);

  return (
    <>
      <DialogTransition
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth={maxWidth}
        scroll="paper"
        open={open}
        TransitionComponent={Transition}
        keepMounted={false}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {props.title}
          <IconButton aria-label="delete" onClick={handleClose}>
            <ExpandCircleDownIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.text}
          </DialogContentText>
          {props.children}
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </DialogTransition>
    </>
  );
}
