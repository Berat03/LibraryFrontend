import React from "react";
import DataContactBar from "./DataContactBar";
import Title from "./Title";


export default function NavBar(props) {


    return (
        <div className="flex h-20 items-center justify-between">
            <div className="flex-1"></div> {/* Invisible spacer */}
            <div className="flex-1 justify-center flex">
                <Title />
            </div>
            <div className="flex-1">
                <DataContactBar col={props.col} setCol={props.setCol} />
            </div>
        </div>
    )
}