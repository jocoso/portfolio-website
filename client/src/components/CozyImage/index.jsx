import React from "react";

const CozyImage = ({ className = "", id, style, uri, altText }) => {
    return (
        <div
            id={id}
            className={`${className}`}
            style={{
                ...style,
                backgroundImage: `url(${uri || "https://via.placeholder.com/150"})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: style?.backgroundPosition || "center",
                backgroundSize: style?.backgroundSize || "cover",
                width: style?.width || '100%',
                height: style?.height || '100%',
                display: "block"
            }}
            aria-label={altText}
        ></div>
    );
};

export default CozyImage;
