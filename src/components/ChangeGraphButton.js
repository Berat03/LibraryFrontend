import React from "react";

export default function ChangeGraphButton({ onClick, text }) {

    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-md transition-all duration-300 bg-uni-purple hover:bg-gray-900 px-4 py-2.5 text-base font-semibold text-white shadow-sm"
        >
            {text}
        </button>
    );
}
