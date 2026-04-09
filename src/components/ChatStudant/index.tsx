import { useEffect, useState, useRef } from "react";
import { FlatList } from "react-native";

import { Author, ButtonSend, ButtonSendtText, CardQuestion, ContainerQuestion, ContainerQuestionInput, InputQuestion, MessageDate, Question, Viewport } from "./styles";

import { UserInfo } from "../Student/styles";

import { io } from "socket.io-client";

import {format} from "date-fns"

import {socket} from "../../main/socket/socket"

type ChatStudentProps = {
    roomCode: string,
    name?: string
}

type MessageProps = {
    question: string,
    date: string
}

export function ChatStudant({roomCode, name}: ChatStudentProps){

    const [question, setQuestion] = useState("")
    const [messages, setMessages] = useState<MessageProps[]>([])

    const handleSendMessage = () => {

        if(!question.trim()){ return }

        const date = format(new Date(), "HH:mm")

        setMessages(prev => [...prev,
            {
                question,
                date
            }])                       
       
        socket.emit("send_message", {
                roomCode,
                message: question,
                name,
                date
            })

        setQuestion("")
    }

    useEffect(() => {

        socket.on("connect", () => {

            socket.emit("join_room", { roomCode })
        })

        return () => {
            socket.disconnect()
        }
    }, [])


    return (
        <Viewport>

            <ContainerQuestion>

                <FlatList 
                    data={messages}                
                    renderItem={({item}) => (

                        <CardQuestion>
                            <Question>{item.question}</Question>
                            <UserInfo>
                                <Author>{name}</Author>
                                <MessageDate>{item.date}</MessageDate>
                            </UserInfo>
                        </CardQuestion>
                    )}
                    style={{width: "100%", display: "flex"}}
                    />

            </ContainerQuestion>

            <ContainerQuestionInput>

                <InputQuestion 
                    placeholder="Faça sua pergunta..."
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    textAlignVertical="top"
                    onChangeText={setQuestion}
                    value={question}/>

                <ButtonSend onPress={() => handleSendMessage()}>
                    
                    <ButtonSendtText>Enviar</ButtonSendtText>

                </ButtonSend>
            </ContainerQuestionInput>
        </Viewport>
    )

}