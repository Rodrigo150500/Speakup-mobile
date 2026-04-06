import { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { speakup_api } from "../../services/speakup_api"

export function Register(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [grade, setGrade] = useState("")
    const [section, setSection] = useState("")

    const handleOnSubmit = async () =>{

        const response = await speakup_api.register({name, email, password, role:"STUDENT", grade, section})

        if(response.status == 201){
            alert("Aluno cadastrado")
        }else{
            alert("Erro ao cadastrar o aluno")
        }
        
    }

    return(
        <SafeAreaView style={{flex: 1, alignItems: "center", justifyContent: "center", borderColor: "red"}}>
            <View>
                <Text>Registro do Aluno</Text>
            </View>
            <View>
                <TextInput placeholder="Nome" onChangeText={setName} value={name}/>
                <TextInput placeholder="Email" onChangeText={setEmail} value={email}/>
                <TextInput placeholder="Senha" onChangeText={setPassword} value={password}/>
                <TextInput placeholder="Série" onChangeText={setGrade} value={grade}/>
                <TextInput placeholder="Turma" onChangeText={setSection} value={section}/>
                <Button title="Registrar" onPress={() => handleOnSubmit()}/>
            </View>
        </SafeAreaView>
    )
}