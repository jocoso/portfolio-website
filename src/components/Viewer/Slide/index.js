import React from "react";

export default function Slide({ title, children }) {
    return(
        <section id={`slide-${title}`} className="">

            <div id="slide-container" className="">
                
                {/* Slide Presentation */}
                <h2 className="">{title}</h2> 

                <div id="children-container" className="">
                    {children} {/* CONTENT */}
                </div>


            </div>

        </section>
    );
}