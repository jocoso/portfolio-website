//
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Importing components...
import NavButton from "./NavItem";

const Navbar = ({ navButtons = [] }) => {
	const location = useLocation();
	const [activeButton, setActiveButton] = useState(null);

	// Set the active nav button based on the current route
	// TODO: Add sentinel variable to check...
	// if the active button has changed before looping.
	useEffect(() => {
        	setActiveButton(navButtons.find(
        		(button) => button.route === location.pathname
		));

    	}, [location.pathname, navButtons]);

	// TODO: Add a template for testing.
	const ulStyle = "flex flex-row justify-center object-contain items-center space-x-3 w- min-h-[5rem] nowrap";

    	// Display navigation buttons.
	const NavigationButtonsRenderer = () => (
        <ul
            id="navbar"
            className= {ulStyle}
        >
            {navButtons.length ? (
                navButtons.map((button) => (
                    <NavButton
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
                <li>Error: No navigation buttons available.</li>
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
