import "./App.css";
import "normalize.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Homepage } from "./pages";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen min-w-screen">
                <Header /> {/* HEADER */}
                <main className="flex-grow">
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/about" element={<Homepage />} /> 
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
