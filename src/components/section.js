import React from "react";

import PropTypes from 'prop-types';
/**Component Name: Section
 * Type: function
 * File Name: section.js
 * Description: Display a modifiable card which contains childrens.
 * Requirements: classNames
 * Returns: A React component of a card containing more components
 * Usage: <Section ln=’t’ smooth=’g’  width=’w’ className=’z’>{children}<Section/>
 */

const classWrapper = require("./modules/class-wrapper");
const classNames = require("classnames");


function Section(props) {

  const className = classWrapper([
    "card",
    classNames({ "card-ln": props.ln, "card-smooth": props.smooth }),
    props.className
  ]);
  console.log(props.style);
  return <div style={{...props.style, backgroundColor: props.bgColor, width: props.width}} className={className} id={props.id}>{props.children}</div>;
}

Section.propTypes = {
  width: PropTypes.string,
  bgColor: PropTypes.string
}

Section.defaultProps = {
  width: "100%",
  bgColor: "white"
}

export default Section;
