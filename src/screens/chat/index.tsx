import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChatRouteProp } from "../types/screen_types";
import { ChatStudant } from "../../components/ChatStudant";
import { ChatTeacher } from "../../components/ChatTeacher";
import { Viewport } from "./styles";

type Props = {
    route: ChatRouteProp
}

export function Chat({route}: Props){

    const {role, roomCode, name} = route.params

    return (
        <Viewport>


            {
                role == "STUDENT" ? <ChatStudant roomCode={roomCode} name={name} /> : <ChatTeacher/>
            }

        </Viewport>
    )
}