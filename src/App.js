import "normalize.css";
import React, { useState, useContext, useEffect, useMemo } from "react";
import "./App.css";

// Components
import { Header, Viewer, StyleMenu } from "./components";

// Pages
import {
    About,
    Projects,
    ResumeSlide,
    ArtSlide,
    ContactMeSlide,
} from "./slides";

// Creating context
const StyleContext = React.createContext(null);

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

    const seasonalStyle = useMemo(
        () => ["summer", "winter", "fall", "spring"],
        []
    );

    const handleChangeStyle = (newStyle) => {
        setStyle(newStyle);
    };

    // Set initial state
    useEffect(() => {
        setStyle(seasonalStyle[0]);
    }, [setStyle, seasonalStyle]);

    const slides = [
        { name: "About", path: "/", element: <About /> },
        { name: "Projects", path: "/projects", element: <Projects /> },
        { name: "Resume", path: "/resume", element: <ResumeSlide /> },
        {
            name: "Contact Me",
            path: "/contact-me",
            element: <ContactMeSlide />,
        },
        { name: "Art", path: "/art", element: <ArtSlide /> },
    ];

    return (
        <div
            className={`${style}-style flex flex-col items-center w-screen h-screen`}
        >
            {/* Styles the Header */}
            <div className="flex flex-col items-center justify-center w-full">
                <Header currentStyle={style} />
                <StyleMenu
                    styles={seasonalStyle}
                    onChange={handleChangeStyle}
                    currentStyle={style}
                />
            </div>

            {/* Styles General Content */}
            <div className={`flex items-center justify-center w-full`}>
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
