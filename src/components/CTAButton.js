import React from "react";

const CTAButton = ({ value = "CTA Button", className = "" }) => {
    return (
        <button
            className={`bg-[var(--highlight)] rounded p-2 md:p-3 lg:p-4 mt-4 w-full md:w-auto text-[var(--text-light)] font-semibold text-sm md:text-base lg:text-lg xl-text-xl ${className}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default CTAButton;
