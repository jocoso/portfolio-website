import React from 'react';
import StyleContext from './slides/styleContext';
import App from './App';

function RootComponent() {
    return(
        <StyleContext.Provider value='summer' >
            <App />
        </StyleContext.Provider>
    );
}

export default RootComponent;