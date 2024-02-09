import React from "react";
import DataContactBar from "./DataContactBar";
import Title from "./Title";


export default function NavBar(props) {


    return (
            <div className="flex h-20 justify-between" >
                <Title />
                <DataContactBar col={props.col} setCol= {props.setCol} />
            </div>
        )
}