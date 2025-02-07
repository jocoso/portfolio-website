//
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Importing components...
import NavItem from "./NavItem";

const Navbar = ({ navButtons = [] }) => {
	const location = useLocation();
	const [activeButton, setActiveButton] = useState(null);
	const [draggedButton, setDraggedButton] = useState(null);
	
	const bgGlass = "backdrop-blur-sm";	
	const navbarStyling = "h-full flex flex-col justify-center items-center fixed bg-white1/4 rounded-xl shadow-lg border boder-white[0.125] text-black " + bgGlass;


	// Set the active nav button based on the current route
	// TODO: Add sentinel variable to check...
	// if the active button has changed before looping.
	//useEffect(() => {
        //	setActiveButton(navButtons.find(
        //		(button) => button.route === location.pathname
        //));


    	//}, [location.pathname, navButtons]);


	const allowDrop = (e) =>  {
		e.preventDefault();
	}

	const drag = (e, button) => {
		console.log(button)
		e.dataTransfer.setData('text/plain', JSON.stringify(button));
	}

	const drop = (e) => {
		console.log("dropped")
		e.preventDefault();
		const droppedButtonData = e.dataTransfer.getData('text/plain');
		const droppedButton = JSON.parse(droppedButtonData);
		setActiveButton(droppedButton);
	}

	    // Display navigation buttons.
    	const NavigationButtonsRenderer = () => (
		    <>
        		<ul
            			id="navbar"
            			className= {navbarStyling}
        		>

	    		
	    		<div id="_getData" key="container" className="bg-white h-10 text-black w-full mx-10 my-1" onDrop={drop} onDragOver={e => e.preventDefault()}>
				{activeButton ? activeButton.name: 'Drop here'}
			</div>
            		{navButtons.length ? (
                		navButtons.map((button) => (
                    			<NavItem
						id={button.id}
                        			key={button.id}
						onDragStart={(e) => drag(e, button)}
						route={button.route}
                        			name={button.name}
                        			isActive={activeButton === button.id}
                    			/>
                		))

            		) : (
                		<li key="noitems">No items available.</li>
            		)}
        	</ul>
	    </>
    );

    return (
        <nav aria-label="Main navigation">
            <NavigationButtonsRenderer />
        </nav>
    );
};

export default Navbar;
