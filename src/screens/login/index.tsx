import { Text, View, Image, TextInput, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {AppName, ContainerLogo, ContainerTitle, Logo} from './styles'
import { useEffect, useState } from "react";
import { speakup_api } from "../../services/speakup_api"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/screen_types";
import { InputTxt } from "../../components/InputTxt";


export function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const submitLogin = async () => {
      
        const response = await speakup_api.login(email, password)

        if(response.status_code == 200){
            navigation.navigate('register')
        }else{
            alert("Credenciais inválidas")
        }
    }


    return(
        <SafeAreaView style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
            
            <ContainerLogo>
                <Logo source={require("../../../assets/Logo.png")}/>
            </ContainerLogo>

            <ContainerTitle>
                <AppName>SpeakUP</AppName>
            </ContainerTitle>

            <View style={{display: "flex", justifyContent: "space-between", backgroundColor: "#6262e9", gap: 25, margin: 10, width: "80%"}}>
                
                <InputTxt 
                    placeholder="Email" 
                    keyboardType="email-address" 
                    onChangeText={(txt) => setEmail(txt)}
                    value={email}
                    />
                
                <InputTxt
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={(txt) => setPassword(txt)}
                    value={password}
                />               
      
                
                <Button title="Logar" onPress={() => submitLogin()}/>
            </View>


        </SafeAreaView>
    )

}