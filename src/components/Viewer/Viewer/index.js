import React, { useState } from "react";
import { LiaLinkedin, LiaTwitter, LiaInstagram } from "react-icons/lia";
import { PiHamburger } from "react-icons/pi";
import { Error } from "../../../slides/";
import "./style.css";

class Reel {
    constructor(slides) {

        this.slides = slides; // Array of objects {element, path}
        this.error = <Error message="This is not an error page." />;
        this.path = window.location.pathname || "/no-able"; // Make sure the user doesn't have access to the website if it's broken
        this.currentSlide = this.search(this.path);

    }

    has_path_changed() {
        return this.path !== window.location.pathname;
    }

    // Searches for a slide, if it can't find it returns an error slide as default.
    search(path) {

        const cleanedPath = (this.path) ? this.path : "/not-able"; // Safeguard against undefined values
        return (
            this.slides.find(
                (slide) => slide.path && slide.path === cleanedPath // Matching paths
            ) || this.set_error(<Error message={`Unable to retrieve path ${this.path}`} />)
        );

    }

    set_error(newErrorComponent) {

        this.error = newErrorComponent;

    }

    //! Event Listener for Insert
    pull_lever() {

        if (this.has_path_changed()) {
            // Keeping sanity in check
            try {
                this.path = window.location.pathname || "/not-able";
                this.currentSlide = this.search(this.path);
            } catch (err) {
                console.error("Failed to update slide based on path change", err);
                this.currentSlide = <Error message="Something strange happened..." />;
            }
        }

    }

    insert() {

        // Change the slide when the user changes the url
        window.addEventListener("popstate", this.pull_lever.bind(this));

    }

    // Returns component
    view() {

        const currentSlide = this.search(window.location.path);
        if(currentSlide) {
            return currentSlide.element;
        }

        return this.error;

    }
}

// Create consistency in the page.
export default function Viewer({ slides = [{}], currentStyle = "summer" }) {
    
    const [ isMenuOpen, setMenuOpen ] = useState(false);


    // Put the slides in the Reel and then view
    const reel = new Reel(slides);
    reel.insert();
    
    return (
        <div
        id="viewer-container"
        className="relative w-full z-0 flex flex-col"
        >
        
        <PiHamburger 
            className={`${currentStyle}-navigation-item navigation-item fixed right-0 top-0 w-20 mt-10 text-5xl lg:hidden`}
            onClick={ () => {setMenuOpen(!isMenuOpen)} } // Click to Open, Click to Close
        />


        {/* Navigation Bar */}
        <div
            id="viewer-navigation-bar"
            className={`${currentStyle}-viewer-navigation-bar viewer-navigation-bar top-0 left-1/2 z-40 -translate-x-1/2 backdrop-blur-md w-10/12 lg:w-5/12 md:rounded-b-xl md:border md:fixed sm:w-full md:border-t-0`}
        >
            
            <ul className="flex items-center justify-around font-medium">

                {slides.map((slide) => {
                    return (

                        <li
                            key={slide.path}
                            id="navigation-item"
                            className={`${currentStyle}-navigation-item navigation-item items-center ${isMenuOpen ? "" : "hidden"} md:flex min-h-20 text-xl sm:text-lg md:text-2xl opacity-100 hover:opacity-50 overflow-hidden transition duration-500 ease-in-out`}
                        >
                            <a
                                href={slide.path}
                                className=""
                            >
                                {slide.name}
                            </a>
                        </li>

                    );
                })}

            </ul>
        
        </div>
        {/* == */}


            {/* Content of the Page */}
            <div id="viewer-content" className="w-full flex justify-center">
                {reel.view()} {/* Managed by Reel instance */}
            </div>

            {/* Contact Bar */}
            <div
                id="viewer-contact-bar"
                className={`${currentStyle}-viewer-contact-bar viewer-contact-bar bottom-0 w-full py-5 min-h-72 flex flex-col items-center justify-around text-3xl group`}
            >

                <a
                    href="https://www.linkedin.com/in/jocoso5273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <LiaLinkedin />
                    <span>Linked In</span>
                </a>
                <a
                    href="https://x.com/Jocoso_Code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <LiaTwitter />
                    <span>Twitter</span>
                </a>
                <a
                    href="https://www.instagram.com/jocoso_code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                >
                    <LiaInstagram />
                    <span>Instagram</span>
                </a>

            </div>

        </div>
    );
}
