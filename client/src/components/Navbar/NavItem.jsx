import { Link } from "react-router-dom";

const NavItem = ({ route, name, isActive, onClick }) => {
    return (
        <li
            onClick={onClick}
            className={`flex justify-center items-center h-full px-6 py-2 transition-all duration-300 ease-in-out cursor-pointer ${
                isActive ? "bg-accent" : ""
            }`}
            role="menuitem"
        >
            <Link
                to={route}
                className="text-center block"
                aria-current={isActive ? "page" : undefined}
            >
                {name}
            </Link>
        </li>
    );
};

export default NavItem;
