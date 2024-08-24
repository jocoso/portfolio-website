import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Title from "../../components/Title";
import CTAButton from "../../components/CTAButton";

const Homepage = () => {

    const [imageSize, setImageSize] = useState(window.innerWidth);
    const navigate = useNavigate();

    function calculateImageSize(width) {
        const minSize = 100; // Minimum size of the image
        const maxSize = 360; // Maximum size of the image
        const factor = 0.05; // Factor to control the rate of decrease
        const size = Math.max(minSize, maxSize - (width * factor) / 100);
        // Calculate the new size with an inverse relationship
        return Math.min(size, maxSize);
    }

    //* Change the size of the image container inversely to the size of the screen.
    useEffect(() => {
        const handleResize = () => {
            setImageSize(calculateImageSize(window.innerWidth));
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = () => {
        navigate("/about")
    }


    return (
        <section
            id="home-page"
            className="flex flex-col md:flex-row min-h-[90vh] bg-[var(--background-color)] flex-grow justify-center items-center"
        >
            <div
                id="presentation-div"
                className="flex-grow p-6 md:p-8 md:w-1/2 flex flex-col justify-center items-center text-center"
            >
                <Title
                    level={1}
                    className="md:text-[3rem] lg:text-[3.5rem] text-[var(--primary-color)]"
                >
                    Joshua Collado
                </Title>
                <Title
                    level={2}
                    className="font-[var(--subtitle-text-size-font)] md:font-[2rem] text-[var(--secondary-color)]"
                >
                    Computer Programmer
                </Title>

                    <p className="font-medium">
                        Welcome to my page! My name is Joshua and I tell
                        computers what to do. If you want to know more about me
                        click this button.
                    </p>
                    <CTAButton id="aboutme-button" value="About Me" 
                    className="hover:bg-[var(--secondary-highlight)] 
                    hover:text-[var(--text-light)]
                    transition-colors duration-500 ease-in-out
                    " 
                    onClick={handleClick}
                    />
            </div>

            <div
                id="animation-div"
                className="flex-grow p-6 md:p-8 md:w-1/2 flex justify-center items-center"
                style={{
                        width: `${imageSize}px`,
                        height: `${imageSize}px`,
                    }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/portfolio-img.png`}
                        alt="A drawing"
                        className="object-contain max-w-full max-h-full rounded-lg shadow-lg"
                    />
            </div>
        </section>
    );
};

export default Homepage;
