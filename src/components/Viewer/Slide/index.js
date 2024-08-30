import React, {useContext} from "react";
import StyleContext from "../styleContext";

import "./style.css";

// Manages the layout of the content
export default function Slide(props) {
    let currentStyle = useContext(StyleContext);

    if(!currentStyle) {
        currentStyle = {style: "summer"};
        console.error("Error retrieving the style context.");
    }

    return (
        <section
            id={`slide-${props.title}`}
            className={`${currentStyle.style}-slide slide w-full h-full lg:w-9/12 rounded-lg md:mb-20 bg-opacity-80 overflow-hidden shadow-md`}
        >
            <div id="slide-container" className="">
                {/* Slide Presentation */}
                <h3 className="w-full my-10 pl-12 shadow-md ">{props.title}</h3>

                <div id="children-container" className="min-h-screen p-10">
                    {props.children} {/* CONTENT */}
                </div>
            </div>
        </section>
    );
}
