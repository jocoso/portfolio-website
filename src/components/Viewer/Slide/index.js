import React, {useContext} from "react";
import StyleContext from "../../../slides/styleContext";

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
            className={`${currentStyle.style}-slide slide w-full h-full rounded-lg md:mb-20 bg-opacity-80 overflow-hidden my-28`}
        >
            <div id="slide-container" className="flex flex-col w-full h-full">
                {/* Slide Presentation */}

                <div id="children-container" className="min-h-screen">
                    {props.children} {/* CONTENT */}
                </div>
            </div>
        </section>
    );
}
