//
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Navbar from "../Navbar"

const Header = () => {
	
	// Divide Space Into Two Areas
	const glassEffect = "bg-[#0a527736] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl"
	const headerStyle = `mt-2 flex flex-col self-center p-0 sm:flex-row w-11/12 fixed border-red-600 ${glassEffect}`;

	const navbarStyle = "w-full sm:w-1/2 lg:w-[70%]";
	const logoStyle = "w-full sm:w-1/2 lg:w-[30%]";
	// TODO: Create an util tool to generate an id.
	
	const navButtonsArray = [
		{ id: 0, name: "About Me", route: "/" },
		{ id: 1, name: "Projects", route: "/projects"},
		{ id: 2, name: "Art", route: "/art" },
		{ id: 3, name: "Blog", route: "/blog" },
		{ id: 4, name: "Contact Me", route: "/contact-me" }
	]

	return (<>
			<div id="header-container" className={headerStyle}>
				<div id="header-logo"  className={logoStyle}>
				</div>
				<div id="header-navbar"  className={navbarStyle}>
					<Navbar navButtons={navButtonsArray} />
				</div>
			</div>
		</>);

};

export default Header;
