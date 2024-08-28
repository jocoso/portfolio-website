import React, {useState} from "react";

export default function StyleMenu({styles, onChange, currentStyle }) {

    const [ isOpen, setIsOpen ] = useState(false);
    const [ triggerType, setTriggerType ] = useState("click");

    const toggleDropdown = () => setIsOpen(!isOpen);
    

    const handleMouseOver = () => {
        if (triggerType === "hover") setIsOpen(true); // the menu shows when hovered.
    };

    const handleMouseOut = () => {
        if(triggerType === "hover") setIsOpen(false); // Stops showing when the mouse leaves.
    }

    const handleStyleChange = ( newStyle ) => {
        onChange(newStyle);
    }
    
    return(<>
        <button 
            id="dropdown-button"
            onClick={ triggerType === "click" ? toggleDropdown : null } 
            onMouseOver={handleMouseOver}
            onMouseOut ={handleMouseOut}
            style={{ cursor: 'pointer' }}
            className="text-white bg-transparent border border-white" 
            type="button"
        >

            {`${currentStyle} style`}

        </button>

        {/* MENU */}
        <div id="style-menu" className="">
            {isOpen && ( 
                Object.keys(styles).map(style => {
                    
                    return(

                            <button onClick={() => handleStyleChange(style)}>{style}</button>

                    );
                })
            )}
        </div>
    </>)
};