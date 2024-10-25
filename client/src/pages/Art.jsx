//
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

// Importing Components...
import QueryList from "../components/QueryList";
import CozyArt from "../components/CozyArt";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

// Importing GraphQL queries and mutations...
import { QUERY_ARTS } from "../utils/queries";

const Art = () => {
    // GraphQL query for fetching art.
    const { loading, error, data } = useQuery(QUERY_ARTS);
    const arts = data?.arts || [];

    // Set local state variables.
    const [hoveredImg, setHoveredImg] = useState(null);
    const [isHovered, setHovered] = useState(false);
    const [isPreviewing, setPreviewing] = useState(false);

    // Handle hover events for artworks.
    const handleHover = (item) => {
        setHoveredImg(item);
        setHovered(true);
    };

    // Closes hover state when previewing an image.
    useEffect(() => {
        if (isPreviewing) setHovered(false);
    }, [isPreviewing]);

    // Template for image preview modal.
    const renderPreview = () => (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            onClick={() => setPreviewing(false)}
        >
            <div
                className="z-30 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={(e) => e.stopPropagation()}
            >
                {/* TODO: Find a better way to import images for projects. */}
                <img
                    src={hoveredImg?.image}
                    alt={hoveredImg?.name || "Artwork"}
                    className="max-w-[80vw] max-h-[80vh] object-contain"
                />
            </div>
        </div>
    );

    // Handle click events for image preview.
    const handlePreview = () => {
        if (hoveredImg) {
            setPreviewing(true);
            setHovered(false);
        }
    };

    // Render error state.
    const renderError = error && (
        <div className="text-center text-red-600">
            <p>Error: {error.message || "An unexpected error occurred."}</p>
            <button
                className="bg-blue-500 text-white p-2 mt-4"
                onClick={() => window.location.reload()}
            >
                Retry
            </button>
        </div>
    );

    // Render hover details or default messages.
    const handleHoverDetails = () => (
        <div className="flex flex-col justify-center items-center text-center">
            {isHovered ? (
                <>
                    <Title tier={3}>{hoveredImg?.name || "Untitled"}</Title>
                    <Paragraph className="text-2xl md:text-3xl mt-4">
                        {hoveredImg?.description || "No description available."}
                    </Paragraph>
                </>
            ) : (
                <>
                    <Paragraph className="text-2xl md:text-3xl">
                        Hover over any image to see its description.
                    </Paragraph>
                    <Paragraph className="text-2xl md:text-3xl">
                        Click to preview the image.
                    </Paragraph>
                </>
            )}
        </div>
    );

    return (
        <main className="p-8">
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="mt-16">
                    <Title className="text-center">Art</Title>
                    {error ? (
                        renderError
                    ): (
                        <>
                            {arts.length > 0 ? (
                                // Display art.
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Artwork Grid. */}
                                    <QueryList 
                                        items={arts} 
                                        Component={CozyArt} 
                                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto"
                                        onMouseEnter={handleHover} 
                                        onMouseLeave={() => {
                                            if(!isPreviewing) {
                                                setHovered(false);
                                                setHoveredImg(null);
                                            }
                                        }}
                                        onClick={handlePreview}
                                    />

                                    {/* Hovered Image details. */}
                                    {handleHoverDetails()}

                                    {/* Preview Template */}
                                    {isPreviewing && renderPreview()}
                                </div>
                            ) : (
                                <div className="text-center">
                                    No artworks found. Please check back later.
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </main>
    );
};

export default Art;