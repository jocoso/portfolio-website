import React from 'react';

const Title = ({ level = 1, children, className='' }) => {
    
    const Tag = `h${level}`; // <h#>
    const generalStyle = "lato-bold p-0 m-0";

    const baseStyles = {
 
        1: `text-6xl sm:text-5xl md:text-6xl lg:text-6xl font-bold   ${generalStyle}`,         // h1
        2: `text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-medium ${generalStyle}`,         // h2
        3: `text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-base   ${generalStyle}`,         // h3

    }

    return (
        <Tag className={`${baseStyles[level]} ${className}`}>
            {children}
        </Tag>
    );

};

export default Title;