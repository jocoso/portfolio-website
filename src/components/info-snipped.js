import React from "react";

import PropTypes from "prop-types";
import Section from "./section";
import Header from "./header";
import ProfileImage from "./profile-image";
const classNames = require("classnames");

/**
 * Component Name: InfoSnipped
 * Type: component
 * File Name: info-snipped.js
 * Description: Returns a piece of text next to an image.
 * Requirements: prop-types, section, header, profile-image, classnames
 * Returns: A React component
 * Usage: <InfoSnipped src=’link’ title=’string’ content=’string’ v_align=’top/center/bottom’ h_align=’left/right’  />
 * */

function returnInProperOrder(img, text, width, orientation) {
  if (orientation === "left") {
    return (
      <Section style={{width}} className="container-flex horizontal-flex m1">
        {img}
        {text}
      </Section>
    );
  } else {
    return (
      <Section style={{width}} className="container-flex horizontal-flex m1">
        {text}
        {img}
      </Section>
    );
  }
}

function InfoSnipped(props) {
  const imgClassName = classNames({
    "v-center-item-flex": props.v_align === "center",
    "v-top-item-flex": props.v_align === "top",
    "v-bottom-item-flex": props.v_align === "bottom"
  });

  const img = (
    <ProfileImage
      className={imgClassName + " " + props.className}
      src={props.src}
    />
  );
  const text = (
    <div style={{width:"100%"}}>
      <Header
        title={props.title}
        size={props.size}
        underline={true}
        subtitle={props.subtitle}
        className="text-align-left pl-2"
      />
      <div className="f18 pl-1" style={{width: "70%"}} id="content">{props.content}</div>
    </div>
  );

  return returnInProperOrder(img, text, props.width, props.h_align);
}

InfoSnipped.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  v_align: PropTypes.oneOf(["top", "center", "bottom"]),
  h_align: PropTypes.oneOf(["left", "right"])
};

InfoSnipped.defaultProps = {
  v_align: "center",
  h_align: "left",
  width: "100%"
};

export default InfoSnipped;
