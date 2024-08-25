import React from "react";

import Title from "../Title";

export default function Header() {
    return(
        <>
            {/* HEADER SECTION*/}
            <div id="header" className="min-h-[10%] h-[10%] text-center flex flex-col justify-content items-center p-2">
                
                {/* LOGO */}
                <div id="logo-container" className="h-1/4 w-2/12 overflow-hidden rounded-full border-2 border-white">
                    <img 
                        id="logo"
                        src={`${process.env.PUBLIC_URL}/portfolio-img.png`} 
                        alt="Logo"
                        className="min-h-full min-w-full h-full w-full"
                    />
                </div>
                {/* == */}

                {/* INFORMATION */}
                <div id="information-container" className="w-65">
                    <Title level={2} className="mt-5 text-highlightOne">Joshua Collado</Title>
                    <Title level={3} className="text-white">Computer Programmer</Title>
                    <p className="text-white lato-semibold mt-5 mb-5">Hello! Welcome to my page.</p>
                </div>
                {/* == */}


            </div>
        </>
    )
}