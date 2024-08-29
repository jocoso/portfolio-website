import React, { useState } from "react";

import "./style.css";

export default function StyleMenu({
    styles = [],
    onChange,
    currentStyle = "summer",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [triggerType, setTriggerType] = useState("hover");

    const toggleDropdown = () => setIsOpen(!isOpen); // Turning

    return (
        <div
            id="style-menu-container"
            className={`${currentStyle}-menu-container relative w-1/7 text-center overflow-visible opacity-1 ${
                isOpen ? "rounded-t-md" : "rounded-md"
            }`}
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
            style={{}}
        >
            <button
                id="dropdown-button"
                onClick={triggerType === "click" ? toggleDropdown : null}
                className={`${currentStyle}-dropdown-button p-3 min-w-[125px] max-w-[125px] text-ellipsis whitespace-nowrap cursor-pointer rounded-md transform transition-colors shadow-md ease-in-out duration-200`}
                type="button"
            >
                {`${currentStyle} style`}
            </button>
            {/* MENU */}
            {isOpen && (
                <div
                    id="dropdown-menu"
                    className={`${currentStyle}-dropdown-menu inline-block z-2 whitespace-nowrap absolute top-full left-0 h-fit min-w-full max-w-full p-0 shadow-lg  ${
                        isOpen && "rounded-b-md"
                    } }`}
                    style={{ opacity: isOpen ? 1 : 0 }}
                >
                    {styles.map((style) => {
                        return (
                            <div
                                id="dropdown-item"
                                className={`${currentStyle}-dropdown-item w-full p-0 m-0 last:rounded-b-md overflow-hidden transform transition-transform ease-in-out`}
                            >
                                <button
                                    onClick={() => onChange(style)}
                                    className="w-full h-full "
                                >
                                    {style}
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
