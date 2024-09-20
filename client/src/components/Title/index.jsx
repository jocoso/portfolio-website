// Replaces h1, h2, h3, h4, h5, h6 to keep the a general theme
const Title = ({ children, style = {}, className = "", tier = 1 }) => {
    const headers = [
        "font-ramaraja text-9xl text-darkbrown", // h1
        "font-ramaraja text-8xl text-darkbrown", // h2
        "font-ramaraja text-7xl text-darkbrown", // h3
        "font-ramaraja text-6xl text-darkbrown", // h4
        "font-ramaraja text-5xl text-darkbrown", // h5
        "font-ramaraja text-4xl text-darkbrown", // h6
    ];
    const isValid = tier < headers.length && tier > 0;
    const header = `${className} ${headers[isValid ? tier - 1 : 0]}`;
    console.log(header);
    return (
        <div style={style} className={header}>
            {children}
        </div>
    );
};

export default Title;
