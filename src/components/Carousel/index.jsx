import React from "react";
import Container from "@mui/material/Container";

import s from "./style.module.scss";

function Carousel(props) {
  return (
    <Container sx={{ padding: "0 !important" }} maxWidth="lg">
      <div className={s.carousel}>
        <div className={s.header}>
          <h2>{props.name}</h2>
        </div>

        <div className={s.items}>{props.items()}</div>
      </div>
    </Container>
  );
}

export default Carousel;
