import React from "react";

class Reel {

    constructor(slides) {
        this.slides = slides; // Array of objects {element, path}
        this.path = window.location.pathname; // String
        this.search(this.path); 
    }

    // private:
    has_path_changed() {
        return this.path !== window.location.pathname;
    }

    search(path) {

        const naked_path = path.replace(/\//g, ''); // Removes forward slashes

        // - Find the first slide in slides array that matches the same path as 
        // the one given as a parameter.
        const currentSlide = this.slides.filter((slide) => 
            slide.path.replace(/\//g, '') === naked_path)[0];
        
        this.element = currentSlide.element; // Component

    }
    
    //! Event Listener for Insert
    pull_lever() {
        if(this.has_path_changed()) {
            try {
                this.path = window.location.pathname;
                this.elementName = this.search(this.path);
            } catch(err) {
                // Do nothing for now
                console.error(err); // Just scream
            }
        }
    }

    // public:
    insert() {
        window.addEventListener("popstate", (event) => {
            this.pull_lever();
        })
        
    }
    
    
    show() {
        return this.element || <div>Failed</div>;
    }
}

// Create consistency in the page.
// it will take a reel component as child
// TODO: Change this function to take a reel instead of the slides.
export default function Viewer({ slides=[{}] }) {

    // TODO: For security reasons do this in App.js
    const reel = new Reel(slides);
    reel.insert();

    return(
        
        <div id="viewer-container" className="w-11/12 min-w-8/12 lg:w-8/12 rounded-t-2xl flex flex-col flex-grow bg-white">

            <div id="navigation-bar" className="min-w-full w-full min-h-20 sm:h-19 md:h-19 lg:h-20 flex rounded-t-lg bg-gray-300 shadow-lg">
                <ul className="w-full flex flex-col sm:flex-row items-center text-center justify-center sm:space-x-7 lg:space-x-10 list-none">
                    {
                        slides.map((slide) => {
                            return(<li key={slide.route} className="sm:w-30 w-full h-full text-center flex justify-center items-center relative group">
                                <a href={slide.route} className="p-3 text-base md:text-lg lg:text-xl font-semibold relative z-10 transition-all duration-300 group-hover:text-shadow-xl group-hover:text-highlightTwo">{slide.name}</a>
                                <span className="w-0 h-full group-hover:w-full absolute inset-0 transition-all duration-300 group-hover:shadow-lg shadow-highlightOne bg-highlightOne"></span>
                            </li>)
                        })
                    }
                </ul>
            </div>
            {reel.show()}
        </div>
    
    );
}