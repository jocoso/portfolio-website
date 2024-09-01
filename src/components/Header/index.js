import React from "react";

import "./style.css";

// Website Header
export default function Header({ currentStyle='summer' }) {
    return(
        <header id="header" className={`${currentStyle}-header w-full h-auto min-h-80 lg:min-h-96 mx-auto p-10 bg-cover bg-no-repeat bg-center shadow-lg text-center bg-fixed`}>
            {/* INFORMATION */}
            
        </header>
    );
}
