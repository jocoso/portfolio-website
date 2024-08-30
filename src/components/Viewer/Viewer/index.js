import React, { cloneElement } from "react";
import { LiaLinkedin, LiaTwitter, LiaInstagram } from "react-icons/lia";
import { Error } from "../../../slides/";
import "./style.css";

class Reel {
    constructor(slides) {
        this.slides = slides; // Array of objects {element, path}
        this.error = <Error message="generic error" />;
        this.path = window.location.pathname || "/no-able"; // If an error occurs, the user is trapped in error page
        this.currentSlide = this.search(this.path);

    }

    // private:
    has_path_changed() {
        return this.path !== window.location.pathname;
    }

    // Searches for a slide, if it can't find it returns an error slide as default.
    search(path) {

        const cleanedPath = (this.path) ? this.path : ""; // Safeguard against undefined values

        return (
            this.slides.find(
                (slide) => slide.path && slide.path === cleanedPath // Matching paths
            ) || this.error 
        );
    }

    //! Event Listener for Insert
    pull_lever() {
        if (this.has_path_changed()) {
            // Keeping sanity in check
            try {
                this.path = window.location.pathname || "/";
                this.currentSlide = this.search(this.path);
            } catch (err) {
                console.error("Failed to update slide based on path change", err);
                this.currentSlide = this.error;
            }
        }
    }

    set_error(errorComponent) {
        this.error = errorComponent;
    }

    // public:
    insert() {
        // Change the slide when the user changes the url
        window.addEventListener("popstate", this.pull_lever.bind(this));
    }

    // Returns component
    view(style) {
        const currentSlide = this.search(window.location.path);

        // Inject props
        if(currentSlide) {
            return currentSlide.element;
        }

        return this.error;
    }
}

// Create consistency in the page.
export default function Viewer({ slides = [{}], currentStyle = "summer" }) {
    // Put the slides in the Reel and then view
    const reel = new Reel(slides);
    reel.insert();

    return (
        <div
            id="viewer-container"
            className="relative mx-auto w-full sm:min-h-full md:min-h-full sm:w-full md:w-10/12 lg:w-11/12 z-0"
        >
            {/* NAVIGATION BAR */}
            <div
                id="viewer-navigation-bar"
                className="w-full text-center my-10 whitespace-nowrap"
            >
                <ul className="flex flex-wrap justify-center items-center gap-4">
                    {slides.map((slide) => {
                        return (
                            <li
                                key={slide.path}
                                id="navigation-item"
                                className={`transition duration-400 ease-in-out ${currentStyle}-navigation-item`}
                            >
                                <a
                                    href={slide.path}
                                    className="p-1 navigation-item hover:underline"
                                >
                                    {slide.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* == */}






            <div id="viewer-content" className="w-full md:w-3/4 m-auto mt-10">
                {reel.view(currentStyle)} {/* Managed by Reel instance */}
            </div>







            {/* CONTACTS BAR */}
            <div
                id="viewer-contact-bar"
                className={`text-2xl p-3 ${currentStyle}-viewer-contact-bar viewer-contact-bar sm:text-center sm:relative sm:bottom-0 sm:opacity-100 sm:items-center sm:flex-row sm:w-full sm:h-full sm:mt-10 md:fixed md:bottom-auto md:top-1/2 md:left-0 md:h-fit md:mt-0 md:w-auto md:flex-col`}
            >
                {/* w-8 h-8 hover:text-highlightTwo */}

                <a
                    href="https://www.linkedin.com/in/jocoso5273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit"
                >
                    <LiaLinkedin className="" />
                    <span>Linked In</span>
                </a>

                <a
                    href="https://x.com/Jocoso_Code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit"
                >
                    <LiaTwitter className="" />
                    <span>Twitter</span>
                </a>

                <a
                    href="https://www.instagram.com/jocoso_code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit h-fit"
                >
                    <LiaInstagram />
                    <span>Instagram</span>
                </a>
            </div>
        </div>
    );
}
