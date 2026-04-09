import {useForm, SubmitHandler, Controller} from "react-hook-form"

import { speakup_api } from "../../services/speakup_api"

import { AlredyHasAccount, ContainerRegister, EntryButton, EntryContainer, EntryField, EntryText, InputGroup, Label, RegistryButton, RegistryText,  Title } from "./styles"

import { InputTxt } from "../../components/InputTxt"

import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/screen_types"

type Inputs = {
    name: string,
    email: string,
    password: string,
    grade: string,
    section: string
}


export function Register(){

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()  

    const {control, handleSubmit, resetField} = useForm<Inputs>()

    const handleOnSubmit:SubmitHandler<Inputs> = async ({email, grade, name, password, section}) =>{

        const response = await speakup_api.register({name, email, password, role:"STUDENT", grade, section})

        if(response.status_code == 201){
            resetField("name")
            resetField("email")
            resetField("password")
            resetField("grade")
            resetField("section")
            alert("Aluno cadastrado")
            navigation.navigate("login")
        }else{
            alert("Erro ao cadastrar o aluno")
        }
        
    }

    const returnToLogin = () => {
        navigation.navigate("login")
    }


    return(
        <ContainerRegister>

            <Title>Bem vindo</Title>
            
            <InputGroup>

                <EntryField>
                    <Label>Nome</Label>
                    <Controller
                        name="name"
                        control={control}
                        render={({field: {onChange, onBlur, value}})=>(
                            <InputTxt
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="John Doe"    
                            />
                        )}                    
                    />
                </EntryField>

                <EntryField>
                    <Label>Email</Label>
                    <Controller
                        name="email"
                        control={control}
                        render={({field: {onChange, onBlur, value}})=>(
                            <InputTxt
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="John.Doe@gmail.com"    
                            />
                        )}                    
                    />
                </EntryField>
                        
                <EntryField>
                    <Label>Senha</Label>
                    <Controller
                        name="password"
                        control={control}
                        render={({field: {onChange, onBlur, value}})=>(
                            <InputTxt
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="******" 
                                secureTextEntry   
                            />
                        )}                    
                    />
                </EntryField>

                <EntryField>
                    <Label>Série</Label>
                    <Controller
                        name="grade"
                        control={control}
                        render={({field: {onChange, onBlur, value}})=>(
                            <InputTxt
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="6° ano"    
                            />
                        )}                    
                    />
                </EntryField>

                <EntryField>
                    <Label>Turma</Label>
                    <Controller
                        name="section"
                        control={control}
                        render={({field: {onChange, onBlur, value}})=>(
                            <InputTxt
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder="A"    
                            />
                        )}                    
                    />
                </EntryField>
            
            </InputGroup>

            <RegistryButton onPress={handleSubmit(handleOnSubmit)}>
                <RegistryText>Registrar</RegistryText>
            </RegistryButton>

            <EntryContainer>

                <AlredyHasAccount>
                    Já possui uma conta? 
                </AlredyHasAccount>
                <EntryButton onPress={ ()=> returnToLogin()}><EntryText>Entrar</EntryText></EntryButton>
            
            </EntryContainer>
        </ContainerRegister>
    )
}