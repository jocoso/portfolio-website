import React from "react";

import { Slide } from "../../components";
// import { SlideLink } from "../../components/Viewer/Slide/components";

export default function Error({ message }) {

    return (

        <Slide title='Error!'>
            
            <p>
                Ce n'est pas une diapositive.
            </p>
            
            <p>
                {message}
            </p>

        </Slide>

    );
};

