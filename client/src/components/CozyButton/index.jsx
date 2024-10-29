const CozyButton = ({
    children,
    style = {},
    className = "",
    onClick,
    download = false,
    href = "",
}) => {
    // Defining styles.
    const base_componentStyle = `bg-primary font-ramaraja text-[3.0096rem] text-darkBrown py-3 px-8 rounded-full shadow-lg font-semibold transition duration-500 whitespace-nowrap`;
    const hover_componentStyle = "hover:shadow-2xl focus:ring-green-200";
    
    const componentStyle = `${className} ${hover_componentStyle} ${base_componentStyle}`;

    return (
        <a
            href={href}
            style={style}
            className={componentStyle}
            onClick={onClick}
            download={download}
        >
            {children}
        </a>
    );
};

export default CozyButton;
