import React, {useEffect, useRef} from "react";
import { LiaLinkedin, LiaTwitter, LiaInstagram } from 'react-icons/lia';

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
            slide.path.replace(/\//g, '') === naked_path)[0] || this.error;
        
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
    const myInputRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        if(myInputRef.current) {
            myInputRef.current.focus();
        }
    });

    // Ensures the footer is always at the bottom of the page
    useEffect(() => {
        if(footerRef.current) {
            
            const updateFooterPosition = () => {
                footerRef.current.style.top = `${window.innerHeight - footerRef.current.offsetHeight}px`
            };
            updateFooterPosition();
            window.addEventListener('resize', updateFooterPosition);

            return () => {
                window.removeEventListener('resize', updateFooterPosition);
            };
        }
    }, [footerRef]);

    

    // Put the slides in the Reel and then view
    const reel = new Reel(slides);
    reel.insert();

    return(
        <div id="viewer-container" className="flex flex-col min-h-20 bg-white rounded-xl shadow-md">
            {/* NAVBAR */}
            <div id="navigation-bar" className=" bg-gray-300 shadow-lg rounded-t-lg">
                <ul className="flex flex-row flex-wrap justify-center">
                    {
                        slides.map((slide) => {
                            return(<li key={slide.path} className="group relative h-full min-w-10 p-5">
                                
                                <span className="absolute inset-y-0 bottom-0 left-1/2 w-0 h-full bg-highlightOne transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full"></span>    
                                <a href={slide.path} className="relative text-2xl font-semibold group-hover:text-highlightTwo" >
                                    {slide.name}    
                                </a>
                                
                            </li>)
                        })
                    }
                </ul>
            </div>
            {/* == */}

            {reel.view()} {/* The Reel component manages this one */}

            {/* FOOTER */}
            <d id="footer" className="group flex flex-row justify-center h-full bg-gray-300 shadow-lg rounded-b-lg">
                {/* w-8 h-8 hover:text-highlightTwo */}
                    <a href="https://www.linkedin.com/in/jocoso5273/" target="_blank" ref={myInputRef} className="p-2 p-5">
                        <LiaLinkedin className="w-10 h-10 hover:text-highlightTwo hover:bg-highlightOne rounded-md"/>
                    </a>
                    <a href="https://x.com/Jocoso_Code" target="_blank" ref={myInputRef} className="p-2 p-5">
                        <LiaTwitter className="w-10 h-10 hover:text-highlightTwo hover:bg-highlightOne rounded-md"/>
                    </a>
                    <a href="https://www.instagram.com/jocoso_code/" target="_blank" ref={myInputRef} className="p-5">
                        <LiaInstagram className="w-10 h-10 hover:text-highlightTwo hover:bg-highlightOne rounded-md"/>
                    </a>
            </d>

        </div>
    
    );
}