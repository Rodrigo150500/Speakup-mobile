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

    const {role, roomCode, name, nameRoom} = route.params

    return (
        <Viewport>

            {
                role == "TEACHER" &&
                nameRoom != undefined
                ? <ChatTeacher roomName={nameRoom}/> : <ChatStudant roomCode={roomCode} name={name} />
            }

        </Viewport>
    )
}