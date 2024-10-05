import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // For tracking route changes
import NavItem from "./NavItem";

const Navbar = ({ items = [] }) => {
    const location = useLocation(); // Hook for getting the current location
    const [activeItem, setActiveItem] = useState(null);

    // Update the active item whenever the location changes
    useEffect(() => {
        const currentItem = items.find(
            (item) => item.route === location.pathname
        );
        if (currentItem) setActiveItem(currentItem.id);
    }, [location.pathname, items]);

    const handleItemClick = (id) => {
        setActiveItem(id);
    };

    return (
        <nav>
            <ul
                id="navbar"
                className="list-none flex justify-center items-center bg-primary m-auto font-thin font-ramaraja text-5xl h-32 relative"
                style={{ top: "2rem" }}
            >
                {items.length > 0 ? (
                    items.map((item) => (
                        <NavItem
                            key={item.id}
                            route={item.route}
                            name={item.name}
                            isActive={activeItem === item.id}
                            onClick={() => handleItemClick(item.id)}
                            aria-current={
                                activeItem === item.id ? "page" : undefined
                            }
                        />
                    ))
                ) : (
                    <li>No items available</li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
