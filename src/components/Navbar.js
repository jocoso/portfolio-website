import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkArray = [{name: "Home", route: "/"}, {name:"About Me", route: "/about"}];
    return (
        <nav className="h-16 px-4 flex items-center justify-end">
            <ul className="flex space-x-4">
                {navLinkArray.map((link) => {
                    return (<li key={link.name}>
                        {/* HOME LINK */}
                        <NavLink
                            to={link.route}
                            className={({ isActive }) =>
                                isActive
                                    ? "min-h-2 bg-[var(--text-light)] text-[var(--text-dark)] font-bold text-[var(--general-text-size-font)] p-1 rounded-md"
                                    : "relative text-[var(--text-light)] transition duration-1500 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[var(--secondary-highlight)] before:scale-x-0 before:origin-left hover:before:scale-x-100 hover:before:scale-x-1"
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>);
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
