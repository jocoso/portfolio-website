import React from "react";

// Create consistency in the page.
// takes a reel component as child
export default function Viewer({ slides=[] }) {
    
    const links = ["About Me", "Projects", "Art", "Resume", "Say hello! Back"]
    
    return(
        <>
            <div className="bg-white min-w-[70%] flex flex-col flex-grow rounded-xl">
                {/* NAVIGATION BAR */}
                <div id="navigation-bar" className="flex min-w-full w-full justify-center bg-gray-500 rounded-t-xl">
                    <ul className="list-none flex flex-row sm:text-left w-full h-10 items-center">
                        {
                            links.map((link) => {
                                return(<li key={link} className="hover:bg-highlightOne h-full w-full transition-colors delay-50">
                                    <a href="/about" className="min-width-10 sm:text-sm lg:text-lg text-base m-10">{link}</a>
                                </li>)
                            })
                        }
                    </ul>
                </div>
                {slides[0]}    {/* content */}
            </div>
        </>
    );
}