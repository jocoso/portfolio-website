import React from "react";

import PropTypes from "prop-types";
import Section from "./section";
import Header from "./header";

/**
 * Component Name: Page
 * Type: component
 * File Name: page.js
 * Description: A section which will require a title and a subtitle to display on page. Mostly used to keep things consistent.
 * Requirements: prop-types
 * Returns: A React component
 * Usage: <Page title=’string’ subtitle=’string’ >{children}</Page>
 * @param {*} props
 */

function Page(props) {
  return (
    <Section width="100%" className={props.className} id={props.id} bgColor={props.bgColor}> 
      <Header
        title={props.title}
        subtitle={props.subtitle}
        size={16}
        font={props.font}
        underline={props.underline}
      />
      {props.children}
    </Section>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bgColor: PropTypes.string
};


export default Page;
