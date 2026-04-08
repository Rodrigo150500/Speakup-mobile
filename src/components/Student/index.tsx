import { Text, View, Image, Button } from "react-native"

import { ContainerStudent, ContainerUser, Menu, FavoriteSubject, MenuStatus, Presence, Status, TopStudents, BtnEntry, ContainerRoom, InputCodeRoom, TitleRoom, BtnText } from "./styles"
import { useState } from "react"
import { speakup_api } from "../../services/speakup_api"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/types/screen_types";
import { useNavigation } from "@react-navigation/native";

export function Stundet(){

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    

    const name = "John Doe"
    const user_data = "4° ano A - n° 20"

    const [code, setCode] = useState("")

    const handleEntryRoom = async () => {
        try{

            console.log("entrando")

            const response = await speakup_api.join_room(code)

            if(response.status_code == 200){
                alert("acesso liberado")
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
                    <Image source={require("../../../assets/user.png")} style={{height: 150, width:150}} />
                    <View>
                        <Text>{name}</Text>
                        <Text>{user_data}</Text>
                    </View>

                    <Menu>
                        <Button title="Atividades"/>
                        <Button title="Presença"/>
                        <Button title="Pontuação"/>
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
