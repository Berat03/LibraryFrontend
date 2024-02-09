import React from "react";

export default function DataContactBar(props){


    const handleClick = (e) => {
            const hash_map = {
            "home": "bg-yellow-300",
            "data": "bg-red-300",
            "contact": "bg-indigo-300",
            };
            props.setCol(hash_map[e.target.value])
    }

    return (
        <div className="mt-3">
            <button className="mr-10 " onClick={handleClick} value="home"> HOME </button>
            <button className="mr-10" onClick={handleClick} value="data"> DATA </button>
            <button className="mr-5" onClick={handleClick} value="contact"> CONTACT </button>
        </div>

    )
};