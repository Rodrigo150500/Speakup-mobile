import { Text, View, Image, Button } from "react-native"

import { ContainerStudent, ContainerUser, Menu, FavoriteSubject, MenuStatus, Presence, Status, TopStudents, BtnEntry, ContainerRoom, InputCodeRoom, TitleRoom } from "./styles"

export function Stundet(){

    const name = "John Doe"
    const user_data = "4° ano A - n° 20"


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
                        <InputCodeRoom placeholder="ex: 123"/>
                        <BtnEntry>
                            <Text style={{color: "#fff"}}>Entrar</Text>
                        </BtnEntry>
                        
            </ContainerRoom>
        </ContainerStudent>
    )
    }
