import "./App.css";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Homepage } from './pages';


function App() {
    return(
      <Router>
        <Header /> {/* HEADER */}
        <Routes>
          <Route exact path="/" Component={Homepage} />
        </Routes>
        <Footer />
      </Router>
    )
}

export default App;
