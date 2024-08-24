import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkArray = [{name: "Home", route: "/"}, {name:"About Me", route: "/about"}];
    return (
        <nav className="bg-secondary text-primary w-2/3 h-12 flex justify-center rounded-full p-4 m-3">
            
            <ul className={"flex space-x-6"}>
                {navLinkArray.map((link) => {
                    return (
                        <li key={link.name}>
                            {/* HOME LINK */}
                            <NavLink
                                to={link.route}
                                className={({ isActive }) =>
                                    `${isActive
                                        ? ""
                                        : ""
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
