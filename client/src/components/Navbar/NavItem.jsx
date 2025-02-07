//
import { useNavigate } from "react-router-dom";

const NavItem = ({ id, route, name, isActive, onClick, onDragStart }) => {
	return(
    <li draggable
	id={id}
	onDragStart={onDragStart}
        onClick={onClick}
        className={`text-xl bg-black text-white w-full mx-10 my-1 ${
            isActive ? "bg-orange text-white" : ""
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
    </li>);
};

export default NavItem;
