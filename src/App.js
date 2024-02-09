import React, {useEffect, useState} from "react";
import DataContactBar from "./components/DataContactBar";
import Title from "./components/Title";
function App() {
    const [col, setCol] = useState("bg-yellow-300")

    return (
        <div className="font-bold text-white">

           <div className={`${col} h-screen`} >
                <Title/>
                <DataContactBar col={col} setCol= {setCol} />
           </div>

        </div>

    );
}

export default App;
