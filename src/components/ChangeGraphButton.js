import React from "react";

export default function ChangeGraphButton({ onClick, text }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            style ={{backgroundColor: 'rgb(146,53,180)'}}
        >
            {text}
        </button>
    );
}
