import React, { useState, useContext, useEffect } from "react";
import StyleContext from "./slides/styleContext";
import "./App.css";

// Components
import { Header, Viewer, StyleMenu } from "./components";

// Pages
import { About, Projects, ResumeSlide, ArtSlide, ContactMeSlide,} from "./slides";


const STYLES = ["summer", "winter", "fall", "spring"];
// Creating context

// Context Provider Component
function StyleProvider({ children }) {
    // Initialize the localStorage or default to 'summer'
    const [style, setStyle] = useState(() => {
        const savedStyle = localStorage.getItem('style');

        try{
            return savedStyle ? JSON.parse(savedStyle) : 'summer';
        } catch(err) {
            console.error('Error parsing style from localStorage', err);
            return 'summer';
        }
    });

    useEffect(() => {
        localStorage.setItem('style', JSON.stringify(style));
    }, [style]);

    

    return (
        <StyleContext.Provider value={{ style, setStyle }}>
            {children}
        </StyleContext.Provider>
    );
}

function App() {
    const { style, setStyle } = useContext(StyleContext);

    // Set style to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('style', JSON.stringify(style));
    }, [style]);

    const handleChangeStyle = (newStyle) => {
        setStyle(newStyle);
    };

    const slides = [
        { name: "About", path: "/", element: <About /> },
        { name: "Projects", path: "/projects", element: <Projects /> },
        { name: "Resume", path: "/resume", element: <ResumeSlide /> },
        { name: "Contact Me", path: "/contact-me", element: <ContactMeSlide /> },
        { name: "Art", path: "/art", element: <ArtSlide /> },
    ];

    return (
        <div className={`${style}-style style flex flex-col items-center w-full h-full relative`}>
            {/* Styles the Header */}

            <Header currentStyle={style} />
            <StyleMenu
                styles={STYLES}
                onChange={handleChangeStyle}
                currentStyle={style}
            />
        

            {/* Styles General Content */}
            <Viewer slides={slides} currentStyle={style} />
        </div>
    );
}

const RootComponent = () => (
    <StyleProvider>
        <App />
    </StyleProvider>
);

export default RootComponent;
