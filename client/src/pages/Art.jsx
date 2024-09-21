import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import QueryList from "../components/QueryList";
import CozyArt from "../components/CozyArt";

import { QUERY_ARTS } from "../utils/queries";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

const Art = () => {
    const { loading, error, data } = useQuery(QUERY_ARTS);
    const arts = data?.arts || [];

    const [hoveredImg, setHoveredImg] = useState(null);
    const [isHovered, setHovered] = useState(false);
    const [isPreviewing, setPreviewing] = useState(false);

    const onHoverHandler = (item) => {
        setHoveredImg(item);
        setHovered(true);
    };

    useEffect(() => {
        if(isPreviewing) setHovered(false);
    }, [isPreviewing]);

    const createTemplate = () => {
        const newItem = { ...hoveredImg };
        
        return (
            <div
                className="
                fixed 
                top-0 
                left-0 
                w-full 
                h-full 
                bg-black 
                bg-opacity-50 
                z-0"
                onClick={() => setPreviewing(false)}
            >
                {/* Blurred background layer */}
                <div className="absolute top-0 left-0 w-full h-full blur-md"></div>

                <div
                    className="z-30 absolute left-1/2 top-1/2"
                    style={{ transform: "translate(-50%, -50%)" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img src={`/assets/${newItem.image}`} alt="" className="w-[25vw] h-auto" />
                </div>
            </div>
        );
    };

    const onClickHandle = () => {
        if (hoveredImg) {
            setPreviewing(true);
            setHovered(false);
        }
    };

    return (
        <main>
            {/* IF Loading */}
            {loading ? (
                <div>
                    <p>Loading...</p>
                    {/* You can use a spinner or a skeleton loader here for better UX */}
                </div>
            ) : (
                // No Loading
                <div>
                    <div className="mt-32">
                        <Title className="text-center">Art</Title>
                        {error && (
                            <div>
                                <p>Error: {error.message}</p>
                                {/* Optionally provide more helpful messaging */}
                                <button
                                    onClick={() => window.location.reload()}
                                >
                                    Retry
                                </button>
                            </div>
                        )}
                        {arts.length > 0 ? (
                            <div className="grid grid-cols-2">
                                <div>
                                    <QueryList
                                        items={arts}
                                        Component={CozyArt}
                                        className="grid grid-cols-3"
                                        onMouseEnter={onHoverHandler}
                                        onMouseLeave={() => {
                                            if (!isPreviewing) {
                                                setHovered(false);
                                                setHoveredImg(null);
                                            }
                                        }}
                                        onClick={onClickHandle}
                                    />
                                </div>
                                <div>
                                    {/* IF Hovered */}
                                    {isHovered ? (
                                        <div className="h-full flex flex-col justify-center text-center">
                                            <Title className="" tier={3}>
                                                {hoveredImg.name}
                                            </Title>
                                            <Paragraph className="text-4xl transform transition-transform duration-500 ease-out">
                                                {hoveredImg.description}
                                            </Paragraph>
                                        </div>
                                    ) : (
                                        // Not Hovered
                                        <div className="h-full flex flex-col justify-center">
                                            <Paragraph className="text-center text-4xl">
                                                Hover over any of the pictures
                                                to read their descriptions.
                                            </Paragraph>
                                            <Paragraph className="text-center text-4xl">
                                                Click to see the image.
                                            </Paragraph>
                                        </div>
                                    )}
                                </div>
                                {isPreviewing ? (
                                    <>{createTemplate()}</>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        ) : (
                            <div>
                                No projects found. Please check back later!
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Art;
