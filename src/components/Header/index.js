import React from "react";

import "./style.css";

// Website Header
export default function Header({ currentStyle='summer' }) {
    return(
        <header id="header" className={`${currentStyle}-header w-full md:w-3/5 lg:w-1/2 mx-auto my-20 p-10 bg-cover bg-no-repeat bg-center rounded-lg shadow-lg text-center`}>
            {/* INFORMATION */}
            <div id="information-container" className={`${currentStyle}-information`}>
                <h2 className="text-5xl font-bold relative z-10">Joshua Collado</h2>
                <h3 className="text-xl">Software Developer</h3>
                <p>Welcome to my website!</p>
            </div>
            {/* == */}
        </header>
    );
}
