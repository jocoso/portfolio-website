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
            myInputRef.current.blur();
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
        <div id="viewer-container" className="">
            {/* NAVBAR */}
            <div id="navigation-bar" className=" ">
                <ul className="">
                    {
                        slides.map((slide) => {
                            return(<li key={slide.path} className="">  
                                <a href={slide.path} className="" >
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
            <div id="footer" className="">
                {/* w-8 h-8 hover:text-highlightTwo */}
                    <a href="https://www.linkedin.com/in/jocoso5273/" target="_blank" ref={myInputRef} className="">
                        <LiaLinkedin className=""/>
                    </a>
                    <a href="https://x.com/Jocoso_Code" target="_blank" ref={myInputRef} className="">
                        <LiaTwitter className=""/>
                    </a>
                    <a href="https://www.instagram.com/jocoso_code/" target="_blank" ref={myInputRef} className="">
                        <LiaInstagram className=""/>
                    </a>
            </div>

        </div>
    
    );
}