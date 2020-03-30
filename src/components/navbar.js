import React from "react";

import PropTypes from 'prop-types';

function addItem(obj, idx) {
  return (
    <a
      className="nav-item f18"
      style={{ display: "inline-block" }}
      href={obj.href}
      key={idx}
    >
      {obj.name}
    </a>
  );
}

function addDropdown(obj, idx) {
  return (
    <div
      className="nav-item dropdown f18"
      style={{ display: "inline-block" }}
      href={obj.href}
      key={idx}
    >
      <span>{obj.title}</span>
      <div className="dropdown-content">
      {obj.href.map((ref, idx) => {
        return <a href={ref} key={idx}>{obj.name[idx]}</a>
      })}
      </div>
    </div>
  );
}

function NavBar(props) {
  return (
    <div className={props.className + " nav-container"} id={props.id} style={{...props.style, backgroundColor: props.bgColor}}>
      { props.items.map((item, idx) => {
        return !item.title ? addItem(item, idx) : addDropdown(item, idx);
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