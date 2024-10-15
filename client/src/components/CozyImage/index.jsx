import { twMerge } from "tailwind-merge";

const CozyImage = ({
    className = "",
    id,
    style = {},
    uri,
    altText = "Image",
    fallbackUri = "https://via.placeholder.com/150",
}) => {
    const styleClass = twMerge(
        "w-11/12 h-11/12 lg:w-10/12 lg:h-10/12",
        className
    );

    const handleError = (e) => {
        e.target.onerror = null; // Prevents infinite looping
        e.target.src = fallbackUri; // Set fallback image
    };

    return (
        <img
            id={id}
            className={styleClass}
            style={style}
            src={uri || fallbackUri}
            onError={handleError}
            alt={altText}
        />
    );
};

export default CozyImage;
