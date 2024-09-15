//
const CozyButton = ({
    children,
    style = {},
    className = "",
    onClick,
    download = false,
}) => {
    return (
        <main>
            {download ? (
                <a
                    style={style}
                    className={className}
                    onClick={onClick}
                    download
                >
                    {children}
                </a>
            ) : (
                <a style={style} className={className} onClick={onClick}>
                    {children}
                </a>
            )}
        </main>
    );
};

export default CozyButton;
