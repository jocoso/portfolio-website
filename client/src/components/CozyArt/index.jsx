// Importing components...
import CozyImage from "../CozyImage";

const CozyArt = ({
    data = {},
    onMouseEnter,
    onMouseLeave,
    className = "",
    onClick,
}) => {
    // Define logo URI with a fallback.
    const logoUri = data.image ? data.image : "https://via.placeholder.com/150";

    const componentStyle = ` 
            ${className} 
            w-20 h-24 md:w-24 md:h-24 lg:w-40 lg:h-40 
            rounded-full 
            overflow-hidden 
            border-8 
            hover:border-accent 
            transition-all 
            duration-300 
            ease-in-out 
            cursor-pointer
        `;

    return (
        <div
            className={componentStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            aria-label={data.title || "Artwork"}
            role="img"
            tabIndex={0}
        >
            {/* Image is here. */}
            <CozyImage
                uri={logoUri}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                alt={data.title || "Artwork image"}
            />
        </div>
    );
};

export default CozyArt;
