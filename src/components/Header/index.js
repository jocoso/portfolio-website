import React from "react";

import "./style.css";

//console.log(`${process.env.PUBLIC_URL} + "/header-summer-img.jpg`);

export default function Header({ currentStyle='summer' }) {
    return(
        <>
            <div id="header" className={`${currentStyle}-header w-3/5 h-auto my-20 p-5 rounded-t-lg`}>
                
                {/* LOGO */}
                <div id="logo-container" className={`${currentStyle}-logo text-center flex flex-col items-center justify-center p-5 w-32 m-auto rounded-full border`}>
                    <img 
                        id="logo"
                        src={`${process.env.PUBLIC_URL}/portfolio-img.webp`} 
                        alt="Logo"
                        className="w-full h-full"
                    />
                </div>
                {/* == */}

                {/* INFORMATION */}
                <div id="information-container" className={`${currentStyle}-information text-center font-bold`}>
                    <h2 className="text-5xl">Joshua Collado</h2>
                    <h3 className="">Software Developer</h3>
                    <p className="">Welcome to my website!</p>
                </div>
                {/* == */}


            </div>
        </>
    )
}