import React, {useState} from "react";
import NavBar from "./components/NavBar";
import GetRecentAPI from "./API/GetRecentAPI";
function App() {
    const [col, setCol] = useState("bg-yellow-300")

    return (
        <div>
        <div className={` ${col} font-bold text-white`}>
            <NavBar col={col} setCol= {setCol} />
        </div>

        <div>
            <GetRecentAPI/>
        </div>
        </div>

    );
}

export default App;
