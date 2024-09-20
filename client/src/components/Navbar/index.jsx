import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";

const Navbar = ({ items }) => {

    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const currentItem = items.find(item => item.route === location.pathname);
        if (currentItem) setActiveItem(currentItem.id);
    }, [location, items]);

    const handleItemClick = (id) => {
        setActiveItem(id);
    }

    return (
        <main>
            <ul
                id="navbar"
                className="list-none flex justify-center items-center bg-primary m-auto font-thin font-ramaraja text-5xl h-32 relative"
                style={{top: '2rem' }}
            >
                {items.map((item) => {
                    return (
                        <NavItem
                            key={item.id}
                            route={item.route}
                            name={item.name}
                            isActive={activeItem === item.id}
                            onClick={() => handleItemClick(item.id)}
                        />
                    );
                })}
            </ul>
        </main>
    );
};

export default Navbar;
