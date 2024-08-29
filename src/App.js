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
    const [style, setStyle] = useState("");
    return (
        <StyleContext.Provider value={{ style, setStyle }}>
            {children}
        </StyleContext.Provider>
    );
}


function App() {
    
    const { style, setStyle } = useContext(StyleContext);
    
    const seasonalStyle = useMemo(() => (
        ["summer", "winter", "fall", "spring"]    
    ), []);

    const handleChangeSytle = (newStyle) => {
        setStyle(newStyle);
    };

    // Set initial state
    useEffect(() => {
        setStyle(seasonalStyle[0]);
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
    
        <div className={`${style}-style flex flex-col items-center w-screen h-screen`}>
            
            {/* Styles the Header */}
            <div className="h-full w-full flex flex-col items-center justify-center" >
                <Header currentStyle={style} />
                <StyleMenu styles={seasonalStyle} onChange={handleChangeSytle} currentStyle={style} /> 
            </div>

            {/* Styles General Content */}
            <div className={`h-full w-full flex items-center justify-center `}>
                <Viewer slides={slides} currentStyle={style} />
            </div>
        </div>

    );
}

const RootComponent = () => (
    <StyleProvider>
        <App />
    </StyleProvider>
);

export default RootComponent;
