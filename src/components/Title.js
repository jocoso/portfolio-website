import React from 'react';

const Title = ({ level = 1, children, className='' }) => {
    const Tag = `h${level}`;

    const baseStyles = {
        1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold p-0 m-0",
        2: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
    }

    return (
        <Tag className={`${baseStyles[level]} ${className}`}>
            {children}
        </Tag>
    );
};

export default Title;