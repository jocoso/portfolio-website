import React from "react";
import PropTypes from "prop-types";
/**
 * Component Name: DynamicBar
 * Type: component
 * File Name: dynamic-bar.js
 * Description: A bar with links that dynamically display pages when the links are clicked.
 * Requirements: prop-types
 * Returns: A React component
 * Usage: <DynamicBar links=’[String]’ pages=’[components]’ />
 */

class DynamicBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };
  }

  componentDidMount() {
      this.setState({currentPage: this.props.pages[0]})
  }

  onLinkClick = (idx) => {
    this.setState({currentPage: this.state.pages[idx]});
    console.log("clicked " + idx);
  };

  // Creates a vertical rack containing all the links
  createLinkRack = () => {
    return (
      <div className="container-flex horizontal-flex m2 align-self-center justify-content-center nav-container" style={{backgroundColor: this.props.bgColor, borderRadius: '10px'}} >
        {console.log(this.props.bgColor)}
        {this.state.links.map((link, idx) => {
          return (
            <div
              className="p1 ps-2"
              style={{opacity: '0.5', borderRadius: '10px'}}
              key={idx}
              onClick={() => {
                this.onLinkClick(idx);
              }}
            >
              {link}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.createLinkRack()} {this.state.currentPage}
      </div>
    );
  }
}

DynamicBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
  bgColor: PropTypes.string
};

DynamicBar.defaultProps = {
  bgColor: 'rgb(128,128,128)'
}

export default DynamicBar;
