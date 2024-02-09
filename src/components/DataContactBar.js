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
        <div className="flex justify-end  gap-3 mr-5 mt-3 ">
            <button onClick={handleClick} value="home"> HOME </button>
            <button onClick={handleClick} value="data"> DATA </button>
            <button onClick={handleClick} value="contact"> CONTACT </button>
        </div>

    )
};