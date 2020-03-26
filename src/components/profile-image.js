import React from "react";

import PropTypes from "prop-types";
const classNames = require("classnames");

/**
 * Component Name: ProfileImage
 * Type: component
 * File Name: profile-image.js
 * Description: Display an image in a compact way.
 * Requirements: prop-types
 * Returns: A React component of an image.
 * Usage:
 * <ProfileImage border=’boolean’ color=’hexadecimal # as string’  shape=’circle/square/banner’  style=’object’ src=’link’ alt='string' />
 * @param {*} props
 */

function ProfileImage(props) {
  let className = classNames({
    circle: props.shape === "circle",
    square: props.shape === "square",
    "bordered-image": props.border,
    "shadow-image": props.shadow
  });

  const style = props.style;
  // style['overflow']='hidden';
  props.color && (style["borderColor"] = props.color);
  props.className && (className += " " + props.className);

  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ></div>
    // <img
    //   src={props.src}
    //   className={className}
    //   alt={props.alt}
    //   style={props.style}
    // />
  );
}

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  shape: PropTypes.string,
  border: PropTypes.bool,
  shadow: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string
};

ProfileImage.defaultProps = {
  alt: "img",
  style: { width: '10vw', height: '10vw' },
  border: false,
  shadow: false
};

export default ProfileImage;
