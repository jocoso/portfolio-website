import React from "react";

const NavItem = ({ route, name, isActive, onClick }) => {
    return (
        <>
            <li
                onClick={onClick}
                className={`flex justify-center items-center h-full px-6 py-2 transition-all duration-300 ease-in-out ${
                    isActive ? "bg-accent" : ""
                }`}
            >
                <a href={route} className="text-center block">
                    {name}
                </a>
            </li>
        </>
    );
};

export default NavItem;
