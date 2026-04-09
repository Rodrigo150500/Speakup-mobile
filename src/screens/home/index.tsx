import { HomeRouteProp } from "../types/screen_types";
import { Teacher } from "../../components/Teacher";
import { Stundet } from "../../components/Student";
import { Viewport } from "./styles";

type Props = {
    route: HomeRouteProp
}

export function Home({route}: Props){
    
    const { role, name, grade, number, section } = route.params

    return(
        <Viewport>
            {                                
                role == "STUDENT" && 
                grade != undefined  &&
                number != undefined &&
                section != undefined ? 
                    <Stundet name={name} grade={grade} number={number} section={section} /> : <Teacher/> 
            }
        </Viewport>
    )
}