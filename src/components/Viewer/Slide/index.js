import React from "react";

import Title from "../../Title/index";

export default function Slide({ title, children }) {
    return(
        <section id={`slide-${title}`} className="w-full flex flex-col items-center mlr-auto">
            <div id="slide-container" className="w-9/12 p-0 lg:w-7/12">
                <Title level={2} className="text-left py-10">{title}</Title>
                <div id="children-container" className="text-left text-lg w-full lato-base pb-16 [&>p]:my-3 [&>p]:tracking-wide">
                    {children}
                </div>
            </div>
        </section>
    );
}