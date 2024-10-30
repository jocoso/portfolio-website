import { twMerge } from "tailwind-merge";

const Title = ({ children, style = {}, className = "", tier = 1 }) => {
    const commonStyles = "font-ramaraja text-darkbrown";

    // Define headers with responsive classes.
    const headers = [
        `text-4xl md:text-5xl lg:text-6xl ${commonStyles}`, // h1
        `text-3xl md:text-4xl lg:text-5xl ${commonStyles}`, // h2
        `text-2xl md:text-3xl lg:text-4xl ${commonStyles}`, // h3
        `text-xl md:text-2xl lg:text-3xl ${commonStyles}`, // h4
        `text-lg md:text-xl lg:text-2xl ${commonStyles}`, // h5
        `text-base md:text-lg lg:text-xl ${commonStyles}`, // h6
    ];

    // Clamp tier between 1 and 6.
    const validTier = Math.min(Math.max(tier, 1), 6);
    const headerStyle = headers[validTier - 1]; // Get the corresponding header style

    // Merge Tailwind styles.
    const mergedClassNames = twMerge(headerStyle, className);

    // Dynamically select the header tag (h1 - h6).
    const Tag = `h${validTier}`;

    return (
        <Tag style={style} className={mergedClassNames}>
            {children}
        </Tag>
    );
};

export default Title;
