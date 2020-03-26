

/**
 * Component Name: classWrapper
 * Type: module
 * File Name: class-wrapper.js
 * Description: Takes an array containing different class logics and returns a single sting of classNames.
 * Requirements: None 
 * Returns: A String with all class names
 * Usage: 
 * Const classWrapper = requires(‘class-wrapper’);
 * Const classNames = classWrapper([ class-logic-1,
					Class-logic-2,
					Class-logic-3,
					…]);
 */
module.exports = (arr) => {
    return arr.join(" ");
}