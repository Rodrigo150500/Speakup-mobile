import { Text, View, Image, TextInput, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {styles} from './styles'
import { useEffect, useState } from "react";

export function Login(){

    const [email, setEmail] = useState("Rodrigo.150523@gmail.com")
    const [password, setPassword] = useState("123456")

    const submitLogin = async () => {
        
        console.log("Requisitado6")
        const response = await fetch("http://192.168.0.2:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        console.log(await response.json())

    }

    useEffect(()=>{
        submitLogin()
    }, [])


    return(
        <SafeAreaView style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
            
            <View style={{padding: 25, backgroundColor:"green"}}>

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