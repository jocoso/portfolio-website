const CozyButton = ({
    children,
    style = {},
    className = "",
    onClick,
    download = false,
    href = "#",
}) => {
    const baseStyle =
        "bg-primary font-ramaraja text-[3.0096rem] text-darkBrown py-3 px-8 rounded-full shadow-lg font-semibold transition duration-500 whitespace-nowrap";
    const hoverStyle = "hover:shadow-2xl focus:ring-green-200";

    const buttonStyles = `${baseStyle} ${hoverStyle} ${className}`;

    // Use anchor tag for download links
    if (download) {
        return (
            <a href={href} style={style} className={buttonStyles} download>
                {children}
            </a>
        );
    }

    // Use button for onClick behavior
    return (
        <button
            style={style}
            className={buttonStyles}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
};

export default CozyButton;
