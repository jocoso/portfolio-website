import "normalize.css";
import "./App.css";

import React, {useState, useContext, useEffect, useMemo} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Header, Viewer, StyleMenu } from "./components";
import { About, Projects, ResumeSlide, ArtSlide, ContactMeSlide } from "./slides";

// Creating context
const StyleContext = React.createContext();

// Context Provider Component
function StyleProvider({ children }) {
    const [style, setStyle] = useState("summer");
    return (
        <StyleContext.Provider value={{ style, setStyle }}>
            {children}
        </StyleContext.Provider>
    );
}


function App() {
    const { style, setStyle } = useContext(StyleContext);
    
    const seasonalStyle = useMemo(() => ({
        summer: {},
        winter: {},
        fall: {},
        spring: {}
    }), []);

    const handleChangeSytle = (newStyle) => {
        setStyle(newStyle);
    };

    // Set initial state
    useEffect(() => {
        setStyle(Object.keys(seasonalStyle)[0]);
    }, [setStyle, seasonalStyle]);
    //const [ currentStyle, setCurrentStyle ] = useState(Object.keys(seasonalStyle)[0]);
    
    const slides = [
        { name: "About",      path: "/",           element: <About />          },
        { name: "Projects",   path: "/projects",   element: <Projects />       },
        { name: "Resume",     path: "/resume",     element: <ResumeSlide />    },
        { name: "Contact Me", path: "/contact-me", element: <ContactMeSlide /> },
        { name: "Art",        path: "/art",        element: <ArtSlide />       },
    ];

    return (
    
        <div className="min-h-screen min-w-screen bg-background flex flex-col justify-content items-center">
            <Header />
            <StyleMenu styles={seasonalStyle} onChange={handleChangeSytle} currentStyle={style} /> 
            <Viewer slides={slides} />
        </div>

    );
}

const RootComponent = () => (
    <StyleProvider>
        <App />
    </StyleProvider>
);

export default RootComponent;
