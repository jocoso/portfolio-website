//
import { Link } from "react-router-dom";

const liStyle = " border text-xl text-justify align-middle leading-6 h-[3rem] p-2";
const linkStyle = "text-center";
const NavButton = ({ route, name, isActive, onClick }) => (
    <li id="navbutton-container"
        onClick={onClick}
        className={`${liStyle} ${isActive && "bg-red" }`}
        role="menuitem"
    >
        <Link id="navbutton-link"
            to={route}
            aria-current={isActive ? "page" : undefined}
        >
            {name}
        </Link>
    </li>
);

export default NavButton;
