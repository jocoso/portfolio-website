import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkArray = [
        { name: "Home", route: "/" },
        { name: "About Me", route: "/about" },
    ];
    return (
        <nav className="h-auto w-full px-4 py-3 flex justify-between items-center bg-[var(--secondary-color)] shadow-lg">
            <div className="text-white font-bold text-2xl">
                <NavLink to="/" className="hover:text-[var(--primary-color)] transition-colors duration-500">
                    JOCOSO
                </NavLink>
            </div>
            <ul className={"flex space-x-6"}>
                {navLinkArray.map((link) => {
                    return (
                        <li key={link.name}>
                            {/* HOME LINK */}
                            <NavLink
                                to={link.route}
                                className={({ isActive }) =>
                                    `text-lg font-semibold transition duration-300 ease-in-out ${isActive
                                        ? "text-[var(--primary-color)] border-b-2 border-[var(--highlight-color)]"
                                        : "text-white hover:text-[var(--primary-color)]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
