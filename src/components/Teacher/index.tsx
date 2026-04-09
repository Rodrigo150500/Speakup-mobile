import { ContainerTeacher, ContainerUser, Menu, ContainerRoom, TitleRoom, BtnText, UserPhoto, UserInfo, Username, MenuItemButton, MenuItemText, BtnEntry } from "./styles"

import { useState } from "react"

import { speakup_api } from "../../services/speakup_api"

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/types/screen_types";
import { useNavigation } from "@react-navigation/native";

import { InputTxt } from "../InputTxt";

import { socket } from "../../main/socket/socket"; 

type TeacherProps = {
    name: string
}


export function Teacher({name}: TeacherProps){

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const [nameRoom, setNameRoom] = useState("")
    const [roomCode, setRoomCode] = useState("")

    const handleCreateRoom = async () => {
        try{
            
            const response = await speakup_api.create_room({name: nameRoom, room_code: roomCode})

            if(response.status_code == 201){
                socket.emit("join_as_professor", {roomCode})
                navigation.navigate("chat", {role: "TEACHER", roomCode: roomCode, nameRoom: nameRoom})
            }else{
                alert("Verifique novamente o código da sala")
            }
        }catch(error){
            console.log(error)
        }

    }

    return (
        <ContainerTeacher>
                    <ContainerUser>
                        <UserPhoto
                            source={require("../../../assets/user.png")}
                        />            
                            <UserInfo>
                                <Username>{name}</Username>
                            </UserInfo>                                 
        
                            <Menu>
                                <MenuItemButton>
                                    <MenuItemText>Criar atividade</MenuItemText>
                                </MenuItemButton>
                
                                <MenuItemButton>
                                    <MenuItemText>Realizar chamada</MenuItemText>
                                </MenuItemButton>
                            </Menu>     
                                            
                            
                    </ContainerUser>
        
                    <ContainerRoom>
        
                        <TitleRoom>Criar Sala</TitleRoom>
                        <InputTxt
                            placeholder="Nome da sala"
                            onChangeText={setNameRoom}
                            value={nameRoom}
                        />
                        <InputTxt

                            placeholder="Código da sala"
                            onChangeText={setRoomCode}
                            value={roomCode}
                        
                        />
                        <BtnEntry onPress={() => handleCreateRoom()}>
                            <BtnText>Entrar</BtnText>
                        </BtnEntry>
                                
                    </ContainerRoom>
                </ContainerTeacher>
    )
    }
