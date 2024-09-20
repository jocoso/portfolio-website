import React from "react";

const CozyImage = ({ className = "", id, style, uri, altText }) => {
    if(!uri) {
        return <div>No Image provided</div>
    }
    return (
        <div
            id={id}
            className={`relative ${className}`}
            style={{
                ...style,
                background: `transparent url(${uri})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: style?.backgroundPosition || "center",
                backgroundSize: style?.backgroundSize || "cover",
                width: '100%',
                height: style?.height || "10vw",
                display: uri ? "block" : "none"
                
            }}
            aria-label={altText}
        ></div>
    );
};

export default CozyImage;
