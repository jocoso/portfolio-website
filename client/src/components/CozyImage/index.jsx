import { twMerge } from "tailwind-merge";

const CozyImage = ({
    className = "",
    id,
    style,
    uri,
    altText = "Image",
    fallbackUri = "https://via.placeholder.com/150",
}) => {
    const styleClass = twMerge(
        "w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96",
        className
    );

    return (
        <img
            id={id}
            className={styleClass}
            style={style}
            src={uri || fallbackUri}
            onError={(e) => {
                e.target.onerror = null; // prevents infinite looping
                e.target.src = fallbackUri;
            }}
            alt={altText}
        />
    );
};

export default CozyImage;
