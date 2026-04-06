import { Text, View, Image, TextInput, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from './styles'
import { useEffect, useState } from "react";
import { speakup_api } from "../../services/speakup_api"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/screen_types";


export function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const submitLogin = async () => {
      
        const response = await speakup_api.login(email, password)

        if(response.status == 200){
            navigation.navigate('register')
        }else{
            alert("Credenciais inválidas")
        }
    }

    useEffect(()=>{

    }, [])


    return(
        <SafeAreaView style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
            
            <View style={{padding: 25, backgroundColor:"#00ff62"}}>

                <Image source={require("../../../assets/icone.png")} style={styles.image} />

            </View>
            <View style={styles.container}>
                <Text style={{fontSize: 25}}>Login</Text>
            </View>

            <View style={{display: "flex", justifyContent: "space-between", backgroundColor: "#6262e9", gap: 25, margin: 10, width: "80%"}}>
                <TextInput 
                    placeholder="Email" 
                    keyboardType="email-address" 
                    onChangeText={(txt) => setEmail(txt)}
                    value={email}
                    />
                <TextInput 
                    placeholder="Senha"
                    onChangeText={(txt) => setPassword(txt)}
                    value={password}
                    />
                <Button title="Logar" onPress={() => submitLogin()}/>
            </View>


        </SafeAreaView>
    )

}