const CozyButton = ({
    children,
    style = {},
    className = "",
    onClick,
    download = false,
    href = "#", // Optional prop to handle href when download is true
}) => {
    const theme =
        "bg-primary font-ramaraja text-[3.0096rem] text-darkBrown py-3 px-8 rounded-full shadow-lg font-semibold hover:shadow-2xl focus:right-4 focus:ring-green-200 transition duration-500 whitespace-nowrap";

    // If download is true, use anchor tag with download functionality
    if (download) {
        return (
            <div className={className}>
                <a href={href} style={style} className={theme} download>
                    {children}
                </a>
            </div>
        );
    }

    // Otherwise, use button for onClick behavior
    return (
        <div className={className}>
            <button
                style={style}
                className={theme}
                onClick={onClick}
                type="button"
            >
                {children}
            </button>
        </div>
    );
};

export default CozyButton;
