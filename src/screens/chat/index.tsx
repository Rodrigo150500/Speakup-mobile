import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChatRouteProp } from "../types/screen_types";
import { ChatStudant } from "../../components/ChatStudant";
import { ChatTeacher } from "../../components/ChatTeacher";

type Props = {
    route: ChatRouteProp
}

export function Chat({route}: Props){

    const {role, room_code} = route.params

    return (
        <SafeAreaView>

            {
                role == "STUDENT" ? <ChatStudant room_code={room_code} /> : <ChatTeacher/>
            }

        </SafeAreaView>
    )
}