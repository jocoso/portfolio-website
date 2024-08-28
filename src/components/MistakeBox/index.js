import React, { useState, useEffect } from "react";

export default function MistakeBox({message, remove }) {
    // Hide box after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            remove();
        }, 3000);

        return () => clearTimeout(timer);
    }, [remove]);

    return(
        <div className="bg-gray-200 p-2 my-2">
            {message}
        </div>
    );
}

