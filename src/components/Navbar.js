import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="h-16 px-4 flex items-center justify-end">
            <ul className="flex space-x-4">
                <li>
                    {/* HOME LINK */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "min-h-4 bg-[var(--text-light)] text-[var(--text-dark)] font-bold text-[var(--general-text-size-font)] p-2 rounded-md"
                                : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
