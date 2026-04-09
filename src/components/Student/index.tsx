import { ContainerStudent, ContainerUser, Menu, FavoriteSubject, MenuStatus, Presence, Status, TopStudents, BtnEntry, ContainerRoom, InputCodeRoom, TitleRoom, BtnText, UserPhoto, UserInfo, Username, StudentData, MenuItemButton, MenuItemText } from "./styles"

import { useState } from "react"

import { speakup_api } from "../../services/speakup_api"

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/types/screen_types";
import { useNavigation } from "@react-navigation/native";

import {socket} from '../../main/socket/socket'

type StudentProps = {
    name: string,
    grade: string,
    section: string,
    number: number,
    role?: "STUDENT"
}

export function Stundet({name, grade, number, section, role="STUDENT"
}: StudentProps){

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const [code, setCode] = useState("")
    
    const handleEntryRoom = async () => {
        try{

            const response = await speakup_api.join_room(code)

            if(response.status_code == 200){

                socket.emit("join_room", {roomCode: code})

                alert("Entrando na sala")
                navigation.navigate("chat", {role, roomCode: code, name})

            }else{
                alert("Verifique novamente o código da sala")
            }
        }catch(error){
            console.log(error)
        }
    }


    return (
        <ContainerStudent>
            <ContainerUser>
                <UserPhoto
                    source={require("../../../assets/user.png")}
                />            
                    <UserInfo>
                        <Username>{name}</Username>
                        <StudentData>{grade} {section} - n°{number.toString()}</StudentData>    
                    </UserInfo>      
                    

                    <Menu>
                        <MenuItemButton>
                            <MenuItemText>Atividades</MenuItemText>
                        </MenuItemButton>

                        <MenuItemButton>
                            <MenuItemText>Presença</MenuItemText>
                        </MenuItemButton>

                        <MenuItemButton>
                            <MenuItemText>Pontuação</MenuItemText>
                        </MenuItemButton>
                    </Menu>

                    <MenuStatus>
                        <Status>
                            <Presence>90%</Presence>
                            <Presence>Presença</Presence>
                        </Status>
                        <Status>
                            <TopStudents>Top 10</TopStudents>
                        </Status>
                        <Status>
                            <FavoriteSubject>Matéria preferida</FavoriteSubject>
                            <FavoriteSubject>Matemática</FavoriteSubject>
                        </Status>
                    </MenuStatus>                
                    
            </ContainerUser>

            <ContainerRoom>

                <TitleRoom>Código da Sala</TitleRoom>
                <InputCodeRoom
                    placeholder="ex: 123"
                    onChangeText={setCode}
                    value={code}/>
                <BtnEntry onPress={() => handleEntryRoom()}>
                    <BtnText>Entrar</BtnText>
                </BtnEntry>
                        
            </ContainerRoom>
        </ContainerStudent>
    )
    }
