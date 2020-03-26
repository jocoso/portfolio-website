import React from "react";

import PropTypes from "prop-types";

/**
 * Component Name: Header
 * Type: component
 * File Name: title.js
 * Description: Creates an important text which remains concise through the entire page.
 * Requirements: classNames, prop-types
 * Returns: A React component of a title
 * Usage: <Title className=’string’ size=’[1,2,3,4,5,6,7,8,9,10]’ font='string(font-name(s))' underline=’boolean’ bold=’boolean’ title=’string’ subtitle=’string’ />
 *
 * @param {*} props
 */

const classWrapper = require("./modules/class-wrapper");
const classNames = require("classnames");

function Header(props) {
  const className = classWrapper([
    "f" + props.size,
    classNames({ "bold-text": props.bold, "underline-text": props.underline })
  ]);

  return (
    <div className={props.className} style={{...props.style, width: props.width}} id={props.id}>
      <div id="title" style={{ fontFamily: props.font }} className={className}>
        {props.title}
      </div>
      {props.subtitle && (
        <div
          className={"f" + (props.size + 1)}
          id="subtitle"
          style={{ fontFamily: props.font }}
        >
          {props.subtitle}
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  size: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ]),
  underline: PropTypes.bool,
  bold: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  font: PropTypes.string,
  width: PropTypes.string
};

Header.defaultProps = {
  size: 18,
  font: "'Baloo Chettan 2', cursive, \"Times New Roman\", Times, serif",
  underline: false,
  bold: false,
  bgColor: "white",
  width: "100%"
};

export default Header;
