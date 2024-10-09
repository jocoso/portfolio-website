import { twMerge } from "tailwind-merge";

const Paragraph = ({ children, style = {}, className = "" }) => {
    const combinedClassName = twMerge(
        "font-normal text-darkBrown font-ramaraja",
        className
    );

    return (
        <p style={style} className={combinedClassName}>
            {children}
        </p>
    );
};

export default Paragraph;
