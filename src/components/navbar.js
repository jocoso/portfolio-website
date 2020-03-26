import React from "react";

import PropTypes from 'prop-types';

function addLinkWrapperToObject(obj, idx) {
  return (
    <a className="nav-item f18" style={{display: "inline-block"}} href={obj.href} key={idx}> 
      {obj.name}
    </a>
  );
}

function NavBar(props) {
  return (
    <div className={props.className + " nav-container"} id={props.id} style={{...props.style, backgroundColor: props.bgColor}}>
      {props.items.map((item, idx) => {
        return addLinkWrapperToObject(item, idx);
      })}
    </div>
  );
}

NavBar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    bgColor: PropTypes.string
}

NavBar.defaultProps = {
    bgColor: 'rgb(200, 200, 200)',
    className:"",
    id:"",
    style:{}
}

export default NavBar;