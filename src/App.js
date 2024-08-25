import "./App.css";
import "normalize.css";

import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Viewer } from "./components";
import { Homepage } from "./pages";

function App() {
    return (
        <div className="min-h-screen min-w-screen bg-background flex flex-col justify-content items-center">
            
            <Header />
            <Viewer slides={[<Homepage />]} />
    
        </div>
    );
}

export default App;
