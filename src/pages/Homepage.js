import React from "react";

const Homepage = () => {
    return (
        <section id="home-page">

            <div id="presentation-div">
                <h1>Joshua Collado</h1>
                <h2>Computer Programmer</h2>
                <p>
                    Welcome to my page! My name is Joshua and I tell computers what to do.
                    If you want to know more about me click this button.
                </p>
                <button id="aboutme-button">About Me</button>
            </div>

            <div id="animation-div">
                <img src={`${process.env.PUBLIC_URL}/portfolio-img.png`} alt="Render of a stylize version of me." />
            </div>
            
        </section>
    );
};

export default Homepage;
