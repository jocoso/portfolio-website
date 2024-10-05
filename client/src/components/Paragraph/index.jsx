import { twMerge } from "tailwind-merge";

const Paragraph = ({ children, style = {}, className = "" }) => {
    return (
        <p
            style={style}
            className={twMerge(
                "font-normal text-darkBrown font-ramaraja",
                className
            )}
        >
            {children}
        </p>
    );
};

export default Paragraph;
