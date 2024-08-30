import React from "react";

import { Slide } from "../../components";
// import { SlideLink } from "../../components/Viewer/Slide/components";

export default function Error({ message }) {
    return (
        
        <Slide title="Error!">
            <img
                src={`${process.env.PUBLIC_URL}/error-img.jpg`}
                alt="art"
                className="w-1/3 h-full bg-red-600"
            />

            <p>Ce n'est pas une diapositive.</p>
            <p>{message}</p>
        </Slide>

    );
}
