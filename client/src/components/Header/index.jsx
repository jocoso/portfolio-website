//
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Navbar from "../Navbar"

const Header = () => {
	const navButtonsArray = [
		{ name: "About Me", route: "/" },
		{ name: "Projects", route: "/projects"},
		{ name: "Art", route: "/art" },
		{ name: "Blog", route: "/blog" },
		{ name: "Contact Me", route: "/contact-me" }
	]

	return <Navbar navButtons={navButtonsArray} />

};

export default Header;
