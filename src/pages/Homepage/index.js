import React, { useEffect, useState } from "react";

import Title from "../../components/Title";
import CTAButton from "../../components/CTAButton";

const Homepage = () => {
    const [imageSize, setImageSize] = useState(900);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const minSize = 100; // Minimum size of the image
            const maxSize = 600; // Maximum size of the image
            const factor = 0.4; // Factor control to the rate of decrease

            // Calcualte the new size with an inverse relationship
            const newSize = Math.max(minSize, maxSize - width * factor);
            //console.log(`Width: ${width}, New Size: ${newSize}`)
            setImageSize(newSize);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            // remove even listener on unmount
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section
            id="home-page"
            className="flex flex-col md:flex-row min-h-[90vh] bg-[var(--bg-color)] flex-grow"
        >
            <div
                id="presentation-div"
                className="flex-grow p-8 md:w-1/2 flex justify-center items-center"
            >
                <div className="flex flex-col items-center text-center">
                    <Title level={1}>Joshua Collado</Title>
                    <Title level={2} className="text-[var(--text-medium)]">
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
                    " />
                </div>
            </div>

            <div
                id="animation-div"
                className="flex-grow p-8 md:w-1/2 flex justify-center items-center"
            >
                <img
                    src={`${process.env.PUBLIC_URL}/portfolio-img.png`}
                    alt="Render of a stylize version of myself."
                    style={{
                        width: `${imageSize}px`,
                        height: `${imageSize}px`,
                    }}
                />
            </div>
        </section>
    );
};

export default Homepage;
