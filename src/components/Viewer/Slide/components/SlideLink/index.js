import React from 'react';

export default function SlideLink({ href, children, className }) {
    return(
        <>
            <a href={href} target="_blank" rel="noreferrer" className={`${className} slide-link`}> {children}</a>
        </>
    );
}