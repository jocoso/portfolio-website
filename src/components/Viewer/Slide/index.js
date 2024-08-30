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
            className={`${currentStyle.style}-slide slide w-full h-full rounded-lg md:mb-20 bg-opacity-80`}
        >
            <div id="slide-container" className="">
                {/* Slide Presentation */}
                <h2 className="w-full bg-red">{props.title}</h2>

                <div id="children-container" className="min-h-screen">
                    {props.children} {/* CONTENT */}
                </div>
            </div>
        </section>
    );
}
