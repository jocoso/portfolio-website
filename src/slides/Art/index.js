import React, { useState } from "react";

import { Slide } from "../../components";

export default function ArtSlide() {
    // Importing data from the `database`
    const imgData = [
        { id: 1, alt: "It's Art" },
        { id: 2, alt: "Good 'Friends'" },
    ];
    const publicFolder = process.env.PUBLIC_URL;

    const [isVisible, setVisible ] = useState(false);
    const [presentedArt, setPresentedArt] = useState(imgData[0]) // DefaultImg

    // Click
    const handleShowcaseSwitch = (data) => {setVisible(!isVisible); setPresentedArt(data)}
    // const constructArtUrl = (id) => {return(`${publicFolder}/art-${id}-img.png`)};

    return (
        <Slide title="Art" className="h-full w-full">
            {

                // Display images
                imgData.map((data, i) => {
                    return (
                        <div
                            id="img-container"
                            className="block overflow-hidden w-64 h-80 rounded-lg relative"
                            key={i}
                            onClick={() => {handleShowcaseSwitch(data)}}
                        >
                            <img
                                src={`${publicFolder}/art-${data.id}-img.png`}
                                alt={data.alt}
                                className="absolute w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
                            />
                        </div>
                    );
                })

            }
            { 
                isVisible &&
                <div
                    id="black-screen"
                    className="fixed inset-0 w-full h-auto bg-black bg-opacity-60 flex justify-center items-center z-50"
                    onClick={handleShowcaseSwitch}
                >
                    <img
                        src={`${publicFolder}/art-${presentedArt.id}-img.png`}
                        alt={presentedArt.alt}
                        className="w-1/2 h-auto"
                    />
                </div>

            }
        </Slide>
    );
}
