import {Link as LinkScroll} from "react-scroll";
import ChangeGraphButton from "./ChangeGraphButton";

export default function ScrollDown(){
    return(
            <LinkScroll to="newScreen" smooth={true}>
                <ChangeGraphButton text={"GET INSIGHTS"} />
            </LinkScroll>
    )

}
