import { Text,FlatList } from "react-native";
import { BtnSend, CardQuestion, Container, InputQuestion } from "./styles";
import { useState } from "react";
import { io } from "socket.io-client";

type Props = {
    room_code: string
}

export function ChatStudant({room_code}: Props){

    // const messages:string = []

    const [message, setMessage] = useState("")

    const socket = io(process.env.EXPO_PUBLIC_SPEAKUP_API)
    const sala = {room_code: "1505"}
    const roomCode = "1505"
    const handleSendMessage = () => {
        console.log("ola")
        socket.on("connect",()=>{
            console.log(socket.id)
        })

        socket.emit("join_room", {roomCode})
        
        socket.emit("send_message", {
                roomCode,
                message
            })
    }


    return (
        <Container>

            {/* <FlatList 
                data={messages}                
                renderItem={(item) => (
                    <CardQuestion>item</CardQuestion>
                )}
            /> */}

            <InputQuestion 
                placeholder="Faça sua pergunta..."
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                textAlignVertical="top"
                onChangeText={setMessage}
                value={message}/>

            <BtnSend title="Enviar" onPress={() => handleSendMessage()}/>
        </Container>
    )

}