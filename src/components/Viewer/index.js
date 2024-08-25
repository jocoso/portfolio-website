import React from "react";

// Create consistency in the page.
// takes a reel component as child
export default function Viewer({ slides=[] }) {
    return(
        <>
            <section>
                {slides[0]}    {/* content */}
            </section>
        </>
    );
}