import React, { useState, useEffect } from "react";
import "./style.css";

// This component renders a dropdown menu that can be controlled via hover or click.
export default function StyleMenu({
    styles = [],
    onChange,
    currentStyle = "summer",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [triggerType, setTriggerType] = useState("click");

    // Detect if the device support hover
    useEffect(() => {
        const canHover = window.matchMedia("(hover: hover)").matches;
        setTriggerType(canHover ? "hover" : "click")
    }, []);

    // Function to toggle the visibility of the dropdown menu.
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div
            id="style-menu-container"
            className={`relative w-1/7 text-center overflow-visible ${
                isOpen ? "rounded-t-md" : "rounded-md"
            } ${currentStyle}-menu-container`}
            onMouseOver={() => triggerType === "hover" && setIsOpen(true)}
            onMouseOut={() => triggerType === "hover" && setIsOpen(false)}
        >
            <button
                id="dropdown-button"
                onClick={triggerType === "click" ? toggleDropdown : null}
                className={`cursor-pointer rounded-b-md shadow-md p-3 min-w-[125px] max-w-lg text-ellipsis whitespace-nowrap transform transition-colors ease-in-out duration-200 ${currentStyle}-dropdown-button dropdown-button hover:rounded-b-none`}
                type="button"
            >
                {`${currentStyle} style`}
            </button>
            {isOpen && (
                <div
                    id="dropdown-menu"
                    className={`absolute top-full left-0 z-20 min-w-full max-w-full p-0 shadow-lg rounded-b-md ${currentStyle}-dropdown-menu dropdown-menu`}
                    style={{ opacity: isOpen ? 1 : 0 }} // Controlled opacity for fade-in/out effect.
                >
                    {styles.map((style, i) => (
                        <div
                            key={i}
                            id="dropdown-item"
                            className={`w-full overflow-hidden ${currentStyle}-dropdown-item dropdown-item`}
                        >
                            <button
                                onClick={() => onChange(style)}
                                className="w-full h-full"
                            >
                                {style}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
