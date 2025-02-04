//
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Importing components...
import NavItem from "./NavItem";

const Navbar = ({ navButtons = [] }) => {
	const location = useLocation();
	const [activeButton, setActiveButton] = useState(null);
	const generalStyling = "bg-white text-black";

	// Set the active nav button based on the current route
	// TODO: Add sentinel variable to check...
	// if the active button has changed before looping.
	useEffect(() => {
        	setActiveButton(navButtons.find(
        	(button) => button.route === location.pathname
        ));

    }, [location.pathname, navButtons]);

	

    // Display navigation buttons.
    const NavigationButtonsRenderer = () => (
        <ul
            id="navbar"
            className= {generalStyling}
        >
            {navButtons.length ? (
                navButtons.map((button) => (
                    <NavItem
                        key={button.id}
                        route={button.route}
                        name={button.name}
                        isActive={activeButton === button.id}
                        onClick={() => setActiveButton(button.id)}
                        aria-current={
                            activeButton === button.id ? "page" : undefined
                        }
                    />
                ))
            ) : (
                <li>No items available.</li>
            )}
        </ul>
    );

    return (
        <nav aria-label="Main navigation">
            <NavigationButtonsRenderer />
        </nav>
    );
};

export default Navbar;
