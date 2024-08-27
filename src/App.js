import "normalize.css";
import "./App.css";

import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Viewer } from "./components";
import { About, Projects } from "./slides";

const slides = [
    {name: "About", path:"/", element: <About />},
    {name: "Projects", path: "/projects", element: <Projects />},
];

function App() {
    return (
        <div className="min-h-screen min-w-screen bg-background flex flex-col justify-content items-center">
            
            <Header />
            <Viewer slides={slides} />
    
        </div>
    );
}

export default App;
