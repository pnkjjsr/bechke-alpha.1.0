import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { offerPercent } from "@/utils/helpers/method";

import s from "./style.module.scss";

const MobileStepperCss = styled(MobileStepper)(({ theme }) => ({
  ".MuiMobileStepper-dot": {
    width: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  ".MuiMobileStepper-dotActive": {
    backgroundColor: "#fff",
  },
  ".MuiButtonBase-root": {
    color: "#fff",

    "&.Mui-Disabled": {
      color: "rgba(255, 255, 255, 0.5)",
    },
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SwipeableTextMobileStepper(props) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.slides.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={s.slider}>
      <Box className={s.bannerOne} sx={{ maxWidth: 1200, flexGrow: 1 }}>
        <Paper
          className={s.title}
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{props.slides[activeStep].name}</Typography>
        </Paper>

        <div className={s.product}>
          <figure>
            <Image
              src={props.slides[activeStep].product.image}
              alt={props.slides[activeStep].product.name}
              width="200"
              height="200"
            />
          </figure>
          <div className={s.details}>
            <div className={s.name}>
              {props.slides[activeStep].product.name}
            </div>
            <ul className={s.price}>
              <li>
                <span>
                  MRP: <span>Rs.{props.slides[activeStep].product.offer}</span>
                </span>
              </li>
              <li className={s.offer}>
                <span>
                  <small>
                    {offerPercent(
                      props.slides[activeStep].product.mrp,
                      props.slides[activeStep].product.offer
                    )}
                    % OFF
                  </small>
                  Offer Price:{" "}
                  <span>Rs.{props.slides[activeStep].product.offer}</span>
                </span>
              </li>
            </ul>

            <div className={s.action}>
              <Button variant="contained" color="primary">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        <AutoPlaySwipeableViews
          interval="10000"
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {props.slides.map((step, index) => (
            <div key={index} className={s.bg}>
              {Math.abs(activeStep - index) <= 2 ? (
                <picture>
                  <source media="(min-width:992px)" srcSet={step.xl} />
                  <source media="(min-width:568px)" srcSet={step.lg} />
                  <img src={step.sm} alt={step.name} />
                </picture>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <MobileStepperCss
          className={s.stepper}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {/* Next */}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              {/* Back */}
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
