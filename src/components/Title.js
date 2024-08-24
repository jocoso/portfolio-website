import React from 'react';

const Title = ({ level = 1, children, className='' }) => {
    const Tag = `h${level}`;

    const baseStyles = {
        1: "text-4xl font-bold p-0 m-0",
        2: "text-2xl font-semibold"
    }

    return (
        <Tag className={`${baseStyles[level]} ${className}`}>
            {children}
        </Tag>
    );
};

export default Title;