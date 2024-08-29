import React, { useState, useEffect } from "react";

export default function MistakeBox({message, remove, currentStyle="summer" }) {
    // Hide box after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            remove();
        }, 3000);

        return () => clearTimeout(timer);
    }, [remove]);

    return(
        <div className={`${currentStyle}-dropdown-menu absolute top-full left-0 h-fit min-w-full max-w-full p-0 shadow-lg transition-all ease-in-out`
        }>
            <div className={`${currentStyle}-dropdown-item w-full p-0 m-0 last:rounded-b-md overflow-hidden`}>
                {message}   
            </div>
        </div>
    );
}

