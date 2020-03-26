import React from "react";
import { SocialIcon } from "react-social-icons";

/**Component Name: SocialRack
 * Type: component
 * File Name: social-rack.js
 * Description: A horizontal/vertical rack containing social media links and icons.
 * Requirements: classNames
 * Returns: A React component 
 * Usage: <SocialRack orientation=’vertical/horizontal’ size=”sm/md/lg/xl” links=arrays[’link’] />
*/

const defaulting = require('./modules/defaulting');

function SocialRack(props) {
  const sizes = {
    sm: { height: 25, width: 25 },
    md: { height: 40, width: 40 },
    lg: { height: 100, width: 100 },
    xl: { height: 200, width: 200 }
  };

  return (
    <div className="container-flex horizontal-flex">
      {props.links.map((link, idx) => {
        return (
          <SocialIcon style={defaulting(sizes[props.size], sizes['sm'])} url={link} key={idx} target="_blank" />
        );
      })}
    </div>
  );
}

export default SocialRack;
