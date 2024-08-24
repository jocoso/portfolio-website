import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header
            id="header-section"
            className="bg-[var(--ui-color)] text-[var(--text-light)] min-h-fit"
        >
            <Navbar />
        </header>
    );
};

export default Header;
