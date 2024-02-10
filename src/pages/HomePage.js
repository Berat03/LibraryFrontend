import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LandingPie from "../components/LandingPie";

export default function HomePage() {
    const [col, setCol] = useState("bg-yellow-300");
    // style={{backgroundImage: "url('/durhamNotMyimage.jpeg')"}
    return (
        <div className={`${col} h-screen`}>
            <div id="navbar" className={'font-bold text-white'}>
                <NavBar col={col} setCol={setCol} />
            </div>

            <div id="center" className="flex justify-center">
                <LandingPie />
            </div>
        </div>
    );
};