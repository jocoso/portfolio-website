import React from "react";

import Title from "../Title";

const Navbar = () => {
    const buttonHandler = () => {
        console.log("Project Button has been clicked.");
    };
    return (
        <>

            {/* NAVIGATION BAR SECTION */}
            <nav className="h-full min-h-full w-full min-w-full text-primary flex justify-center p-4">
                <ul className="flex space-x-6 justify-end items-center text-right w-full">
                    <li className="flex justify-end items-center">
                        {/* 
                            * TODO: A menu of projects . 
                        */}
                        <button
                            id="project-button"
                            onClick={buttonHandler}
                            className="text-xl"
                        >
                            <Title level={3}>
                                Projects
                            </Title>
                        </button>
                    </li>
                </ul>

            </nav>
            <span className="flex justify-center">
                <hr className="h-[0.10rem] bg-primary w-[98%]" />
            </span>
        </>
    );
};

export default Navbar;
