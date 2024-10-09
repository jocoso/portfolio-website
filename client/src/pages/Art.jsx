import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";

import QueryList from "../components/QueryList";
import CozyArt from "../components/CozyArt";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import { QUERY_ARTS } from "../utils/queries";

const Art = () => {
    const { loading, error, data } = useQuery(QUERY_ARTS);
    const arts = data?.arts || [];

    const [hoveredItem, setHoveredItem] = useState(null); // Merge hover state into one
    const [isPreviewing, setPreviewing] = useState(false);

    // Handle hover and preview actions in a single state update
    const handleHover = (item) => {
        setHoveredItem(item);
    };

    const handleLeave = () => {
        if (!isPreviewing) {
            setHoveredItem(null);
        }
    };

    const handleClick = () => {
        if (hoveredItem) {
            setPreviewing(true);
            setHoveredItem(null);
        }
    };

    useEffect(() => {
        if (isPreviewing) {
            setHoveredItem(null);
        }
    }, [isPreviewing]);

    // Memoize the preview template to prevent unnecessary re-renders
    const previewTemplate = useMemo(() => {
        if (!hoveredItem) return null;

        return (
            <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                onClick={() => setPreviewing(false)}
            >
                <div
                    className="z-30 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={`/assets/${hoveredItem.image}`}
                        alt={hoveredItem.name || "Artwork"}
                        className="max-w-[80vw] max-h-[80vh] object-contain"
                    />
                </div>
            </div>
        );
    }, [hoveredItem]);

    return (
        <main className="p-8">
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="mt-16">
                    <Title className="text-center">Art</Title>
                    {error && (
                        <div className="text-center text-red-600">
                            <p>Error: {error.message}</p>
                            <button
                                className="bg-blue-500 text-white p-2 mt-4"
                                onClick={() => window.location.reload()}
                            >
                                Retry
                            </button>
                        </div>
                    )}
                    {arts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Artwork Grid */}
                            <QueryList
                                items={arts}
                                Component={CozyArt}
                                className="grid grid-cols-3 gap-4"
                                onMouseEnter={handleHover}
                                onMouseLeave={handleLeave}
                                onClick={handleClick}
                            />

                            {/* Hovered Image Details */}
                            <div className="flex flex-col justify-center items-center text-center">
                                {hoveredItem ? (
                                    <div>
                                        <Title tier={3}>
                                            {hoveredItem?.name || "Untitled"}
                                        </Title>
                                        <Paragraph className="text-2xl md:text-3xl mt-4">
                                            {hoveredItem?.description ||
                                                "No description available."}
                                        </Paragraph>
                                    </div>
                                ) : (
                                    <div>
                                        <Paragraph className="text-2xl md:text-3xl">
                                            Hover over any image to see its
                                            description.
                                        </Paragraph>
                                        <Paragraph className="text-2xl md:text-3xl">
                                            Click to preview the image.
                                        </Paragraph>
                                    </div>
                                )}
                            </div>

                            {/* Preview Template */}
                            {isPreviewing && previewTemplate}
                        </div>
                    ) : (
                        <div className="text-center">
                            No artworks found. Please check back later!
                        </div>
                    )}
                </div>
            )}
        </main>
    );
};

export default Art;
