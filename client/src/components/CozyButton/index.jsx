//
const CozyButton = ({
    children,
    style = {},
    className = "",
    onClick,
    download = false,
}) => {
    const theme = "bg-primary font-ramaraja text-[3.0096rem] text-darkBrown py-3 px-8 rounded-full shadow-lg font-semibold hover:shadow-2xl focus:right-4 focus:ring-green-200 transition duration-500 whitespace-nowrap";
    return (
        <div className={className}>
            {download ? (
                <a
                    style={style}
                    className={theme}
                    onClick={onClick}
                    download
                >
                    {children}
                </a>
            ) : (
                <a style={style} className={theme} onClick={onClick}>
                    {children}
                </a>
            )}
        </div>
    );
};

export default CozyButton;
