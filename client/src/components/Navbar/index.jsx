//
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Importing components...
import NavItem from "./NavItem";

const Navbar = ({ items = [] }) => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);

    // Set the active item based on the current route
    useEffect(() => {
        const currentItem = items.find(
            (item) => item.route === location.pathname
        );
        if (currentItem) setActiveItem(currentItem.id);
    }, [location.pathname, items]);

    // Display all Navigation items.
    const NavigationItemsRenderer = () => (
        <ul
            id="navbar"
            className="list-none flex justify-center items-center bg-primary m-auto font-thin font-ramaraja text-5xl h-32 relative"
            style={{ top: "2rem" }}
        >
            {items.length ? (
                items.map((item) => (
                    <NavItem
                        key={item.id}
                        route={item.route}
                        name={item.name}
                        isActive={activeItem === item.id}
                        onClick={() => setActiveItem(item.id)}
                        aria-current={
                            activeItem === item.id ? "page" : undefined
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
            <NavigationItemsRenderer />
        </nav>
    );
};

export default Navbar;
