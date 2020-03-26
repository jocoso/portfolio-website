/**
 * Component Name: defaulting
 * Type: function
 * File Name: defaulting.js
 * Description: Makes a decision between two given parameters by checking if one of them is null.
 * Requirements: None
 * Usage: 
 * 
 * Cons defaulting = require(‘defaulting’);
 * Const answer = defaulting(arg(req), def(req));
 */

module.exports = (arg, def) => {
    return (arg != null) ? arg : def;
}