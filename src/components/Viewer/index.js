import React from "react";

// Create consistency in the page.
// takes a reel component as child
export default function Viewer({ className='', reel }) {
    return(
        <>
            <section className={className}>
                {reel}    {/* content */}
            </section>
        </>
    );
}