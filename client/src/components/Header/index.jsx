//
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Navbar = ({ items = [] }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    /* Navigation Items */
    const NavItemsRenderer = () => (
        <ul
            className={twMerge(
                "md:flex md:space-x-6 md:items-center absolute md:relative left-0 top-16 md:top-auto bg-darkbrown w-full md:w-auto transition-all duration-500",
                isMenuOpen ? "block" : "hidden md:flex"
            )}
        >
            {items.map((item) => (
                <li
                    key={item.id}
                    className={twMerge(
                        "py-4 md:py-0 text-lg md:text-base text-center",
                        location.pathname === item.route
                            ? "border-b-2 border-accent"
                            : "hover:text-accent"
                    )}
                >
                    <Link to={item.route} onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );

    // Hamburger Menu for Mobile
    const HamburgerButtonComponent = () => {
        <button
            className="block md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
        >
            <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                        isMenuOpen
                            ? "M6 18L18 6M6 6l12 12" // Close icon
                            : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                    }
                />
            </svg>
        </button>;
    };

    return (
        <header className="bg-darkbrown text-white shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                
                {/* Logo / Title */}
                <div className="text-2xl font-bold">
                    <Link to="/">Joshua Code</Link>
                </div>
                <HamburgerButtonComponent />
                <NavItemsRenderer />
            
            </nav>
        </header>
    );
};

export default Navbar;
