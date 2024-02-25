import TimeDay from "./timeDay";
import Navigation from "./navigation";
export default function NavBar(){
    return (
        <div className="flex flex-row ">
            <TimeDay/>
            <Navigation/>
        </div>
    )
}