import React, { useState } from "react";

export default function ChangeGraphButton({ onClick, text }) {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovered ? 'rgb(17 24 39)' : 'rgb(146,53,180)', // Use gray for hover, your color otherwise
        transition: 'background-color 150ms ease-in-out', // Smooth transition for background color
    };

    return (
        <button
            type="button"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="rounded-md px-4 py-2.5 text-base font-semibold text-white shadow-sm"
            style={buttonStyle}
        >
            {text}
        </button>
    );
}
