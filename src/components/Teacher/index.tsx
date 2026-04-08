import { Text, View, Image, Button } from "react-native"

import { ContainerTeacher, ContainerUser, Menu, BtnEntry, ContainerRoom, InputRoom, TitleRoom, BtnText, Label } from "./styles"
import { useState } from "react"
import { speakup_api } from "../../services/speakup_api"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../screens/types/screen_types";
import { useNavigation } from "@react-navigation/native";

export function Teacher(){

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const names = "Teacher John Doe"

    const [name, setName] = useState("")
    const [room_code, setRoom_code] = useState("")


    const handleCreateRoom = async () => {
        try{
            
            const response = await speakup_api.create_room({name, room_code})

            if(response.status_code == 201){
                alert("acesso liberado")
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
                    <Image source={require("../../../assets/user.png")} style={{height: 150, width:150}} />
                    <View>
                        <Text>{names}</Text>
                    </View>

                    <Menu>
                        <Button title="Criar atividade"/>
                        <Button title="Realizar chamada"/>
                    </Menu>

                          
                    
            </ContainerUser>

            <ContainerRoom>

                        <TitleRoom>Criar sala</TitleRoom>
                        <Label>Nome da sala</Label>
                        <InputRoom
                            placeholder="ex: Sala 305"
                            onChangeText={setName}
                            value={name}
                        />
                        
                        <Label>Código da sala</Label>
                        <InputRoom
                            placeholder="ex: 123"
                            onChangeText={setRoom_code}
                            value={room_code}/>
                        <BtnEntry onPress={() => handleCreateRoom()}>
                            <BtnText>Criar sala</BtnText>
                        </BtnEntry>
                        
            </ContainerRoom>
        </ContainerTeacher>
    )
    }
