import React from "react";
import { NavLink } from "react-router-dom";

import { Error } from "../../../slides/";

class Reel {

    constructor(slides) {
        this.slides = slides; // Array of objects {element, path}
        this.error = <Error />;
        this.path = window.location.pathname; // String
        this.currentSlide = null;
        this.currentPath = '';
        this.search(this.path); 
    }

    // private:
    has_path_changed() {
        return this.path !== window.location.pathname;
    }

    getCurrentPath() {
        return this.currentPath;
    }

    search(path) {

        const naked_path = path.replace(/\//g, ''); // Removes forward slashes

        // - Find the first slide in slides array that matches 
        // the parameter.
        const currentSlide = this.slides.filter((slide) => 
            slide.path.replace(/\//g, '') === naked_path)[0] || <div></div>;
        
        // A pseudo return
        this.element = currentSlide.element; // Component
        this.currentPath = naked_path;

    }
    
    //! Event Listener for Insert
    pull_lever() {

        if(this.has_path_changed()) {

            // Keeping some sanity
            try {
                this.path = window.location.pathname;
                this.currentSlide = this.search(this.path) || this.error;
            } catch(err) {
                // set this.currentElement to Error slide
                this.currentSlide = this.error || <div></div>;
            }

        }
    }

    set_error(component) {
        this.error = component;
    }

    // public:
    insert() {

        // Change the slide when the user changes the url
        window.addEventListener("popstate", (event) => {
            this.pull_lever();
        });

        
    }
    
    // Returns component
    view() {
        return this.element || this.error;
    }
}

// Create consistency in the page.
// it will take a reel component as child
export default function Viewer({ slides=[{}] }) {

    // Put the slides in the Reel and then view
    const reel = new Reel(slides);
    reel.insert();

    return(
        
        <div id="viewer-container" className="w-11/12 min-w-8/12 lg:w-8/12 rounded-t-2xl flex flex-col flex-grow bg-white">
            {/* NAVBAR */}
            <div id="navigation-bar" className="min-w-full w-full min-h-20 sm:h-19 md:h-19 lg:h-20 flex rounded-t-lg bg-gray-300 shadow-lg">
                <ul className="w-full flex flex-col sm:flex-row items-center text-center justify-center sm:space-x-7 lg:space-x-10 list-none">
                    {
                        slides.map((slide) => {
                            return(<li key={slide.path} className="sm:w-30 w-full h-full text-center flex justify-center items-center relative group">
                                <a href={slide.path}  className="p-3 text-base md:text-lg lg:text-xl font-semibold relative z-10 transition-all duration-300 group-hover:text-shadow-xl group-hover:text-highlightTwo" >{slide.name}</a>
                                <span className="w-0 h-full group-hover:w-full absolute inset-0 transition-all duration-300 group-hover:shadow-lg shadow-highlightOne bg-highlightOne"></span>
                            </li>)
                        })
                    }
                </ul>
            </div>
            {/* == */}

            {reel.view()} {/* The Reel component manages this one */}

        </div>
    
    );
}