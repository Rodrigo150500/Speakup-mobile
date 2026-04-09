import { FlatList } from "react-native";

import { Author, CardQuestion, MessageDate, Question, Viewport, UserInfo, Title, NoMessages } from "./styles";

import { socket } from "../../main/socket/socket";

import { useEffect } from "react";

type ChatTeacherProps = {
    roomName: string
}

type MessageProps = {
    message: string,
    name: string,
    date: string
}

export function ChatTeacher({roomName}: ChatTeacherProps){

    const messages:MessageProps[] = []

    useEffect( ()=>{

        socket.on("receive_message", ({date, message, name}:MessageProps) => {
            messages.push({
                message, name, date
            })
        })
        

    },[])
    

    return(
        <Viewport>
            <Title>{roomName}</Title>

            {
                (messages.length == 0) ? <NoMessages>Sem perguntas no momento</NoMessages> :
            
            <FlatList
                data={messages}
                renderItem={({item})=>(
                    <CardQuestion>
                        <Question>{item.message}</Question>
                        <UserInfo>
                            <Author>{item.name}</Author>
                            <MessageDate>{item.date}</MessageDate>
                        </UserInfo>
                    </CardQuestion>
                )}
                style={{width: "100%", display: "flex"}}
            />
            }
        </Viewport>
    )
}