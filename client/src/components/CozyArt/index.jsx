import CozyImage from "../CozyImage";

const CozyArt = ({
    data = {},
    onMouseEnter,
    onMouseLeave,
    className = "",
    onClick,
}) => {
    // Ensure data and data.image are valid, with fallback
    const logoUri = data?.image
        ? `/assets/${data.image}`
        : "https://via.placeholder.com/150";

    return (
        <div
            className={`
                ${className} 
                w-20 h-24 md:w-24 md:h-28 lg:w-36 lg:h-40 
                rounded-full 
                overflow-hidden 
                border-8 
                hover:border-accent 
                transition-all 
                duration-300 
                ease-in-out 
                cursor-pointer
            `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            aria-label={data?.title || "Artwork"} // Accessibility enhancement
            role="img" // Screen reader hint
            tabIndex={0} // Adds focusability for keyboard navigation
        >
            <CozyImage
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" // Hover effect on image
                uri={logoUri}
                alt={data?.title || "Artwork image"} // Fallback alt text
            />
        </div>
    );
};

export default CozyArt;
