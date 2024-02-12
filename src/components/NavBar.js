import React from "react";
import TitleDate from "./TitleDate";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center text-2xl text-white w-full">
            <div className="flex">
                <div>
                    <TitleDate />
                </div>
            </div>

            {/* This div acts as a spacer, pushing the Title and PageNavBar to opposite ends */}
            <div className="flex">
                <h1 className="text-4xl"> BILLY B OCCUPANCY</h1>
            </div>

            <div className="flex">
                <Link className="mr-7" to={'/'}> HOME </Link>
                <Link className="mr-6" to={'/data'}> DATA </Link>
                <Link to={'/contact'}> CONTACT</Link>
            </div>
        </div>
    );
}
