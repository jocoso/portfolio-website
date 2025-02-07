//
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Navbar from "../Navbar"

const Header = () => {
	const navButtonsArray = [
		{ id:0, name: "About Me", route: "/" },
		{ id:1, name: "Projects", route: "/projects"},
		{ id:2, name: "Art", route: "/art" },
		{ id:3, name: "Blog", route: "/blog" },
		{ id:4, name: "Contact Me", route: "/contact-me" }
	]

	return <Navbar navButtons={navButtonsArray} />

};

export default Header;
