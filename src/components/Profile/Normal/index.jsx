import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import s from "./style.module.scss";

function Normal(props) {
  return (
    <div className={s.profile}>
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <figcaption>{props.name}</figcaption>
    </div>
  );
}

Normal.propTypes = {
  // name: PropTypes.string.isRequired,
};

export default Normal;
