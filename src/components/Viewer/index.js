import React from "react";

// Create consistency in the page.
// takes a reel component as child
export default function Viewer({ slides=[] }) {
    
    const links = ["About Me", "Projects", "Art", "Resume", "Say Hello"]
    
    return(
        
        <div id="viewer-container" className="w-11/12 min-w-8/12 rounded-t-2xl flex flex-col flex-grow bg-white">
            {/* NAVIGATION BAR */}
            <div id="navigation-bar" className="min-w-full w-full min-h-20 sm:h-24 md:h-19 lg:h-20 flex rounded-t-lg bg-gray-300 shadow-lg">
                <ul className="w-full flex flex-col sm:flex-row items-center text-center justify-center sm:space-x-7 lg:space-x-10 list-none">
                    {
                        links.map((link) => {
                            return(<li key={link} className="sm:w-30 w-full h-full text-center flex justify-center items-center relative group">
                                <a href="/about" className="p-3 text-base md:text-lg lg:text-xl font-semibold relative z-10 transition-all duration-300 group-hover:text-shadow-xl group-hover:text-highlightTwo">{link}</a>
                                <span className="w-0 h-full group-hover:w-full absolute inset-0 transition-all duration-300 group-hover:shadow-lg shadow-highlightOne bg-highlightOne"></span>
                            </li>)
                        })
                    }
                </ul>
            </div>
            {slides[0]}    {/* content */}
        </div>
    
    );
}