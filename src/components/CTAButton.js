import React from "react";

const CTAButton = ({ value = "CTA Button", className = "", onClick }) => {
    return (
        <button
            className={`bg-[var(--highlight)] btn rounded p-2 mt-4 min-w-lg text-[var(--text-light)] font-semibold text-[var(--general-text-size-font)]] ${className}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default CTAButton;
