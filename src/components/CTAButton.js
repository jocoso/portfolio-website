import React from "react";

const CTAButton = ({ value = "CTA Button", className = "" }) => {
    return (
        <button
            className={`bg-[var(--highlight)] btn rounded p-2 mt-4 min-w-lg text-[var(--text-light)] font-semibold text-[var(--general-text-size-font)]] ${className}`}
        >
            {value}
        </button>
    );
};

export default CTAButton;
