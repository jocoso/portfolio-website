import React from "react";

const CTAButton = ({ value = "CTA Button", className = "", onClick }) => {
    return (
        <button
            className={`rounded p-2 mt-4 min-w-lg ${className}`}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default CTAButton;
