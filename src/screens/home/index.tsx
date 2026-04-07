import { HomeRouteProp } from "../types/screen_types";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Teacher } from "../../components/Teacher";
import { Stundet } from "../../components/Student";

type Props = {
    route: HomeRouteProp
}

export function Home({route}: Props){
    
    const { role } = route.params

    return(
        <SafeAreaView>
            <Text>Home Screen</Text>
            {
                role == "STUDENT" ? <Stundet/> : <Teacher/> 
            }
        </SafeAreaView>
    )
}