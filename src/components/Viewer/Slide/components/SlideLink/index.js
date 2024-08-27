import React from 'react';

// We use _blank in this house.
export default function SlideLink({ href, children, className }) {
    return(
        <>
            <a href={href} target="_blank" rel="noreferrer" className={`${className} slide-link hover:text-background`}> {children}</a>
        </>
    );
}