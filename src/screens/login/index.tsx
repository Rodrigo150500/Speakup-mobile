import { SafeAreaView } from "react-native-safe-area-context";
import {AppName, ContainerCreateAccount, ContainerForgotPassword, ContainerForms, ContainerLogo, ContainerTitle, CreateAccountButton, CreateAccountText, ForgotPasswordButton, ForgotPasswordText, LoginButton, LoginText, Logo, TitleCreateAccount} from './styles'
import { speakup_api } from "../../services/speakup_api"
import { InputTxt } from "../../components/InputTxt";
import { useForm, SubmitHandler, Controller} from "react-hook-form"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/screen_types";

type Inputs = {
    email: string,
    password: string
}

export function Login(){

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()  

    const {control, handleSubmit, formState: {errors}} = useForm<Inputs>({
        defaultValues:{
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
        try{

            const response = await speakup_api.login(email, password)
            
            if(response.status_code == 200){
                navigation.navigate('home', {role: response.attributes.role })
            }else{
                alert("Credenciais inválidas")
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleCreateAccount = () => {
        navigation.navigate("register")
    }


    return(
        <SafeAreaView style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
            
            <ContainerLogo>
                <Logo source={require("../../../assets/Logo.png")}/>
            </ContainerLogo>

            <ContainerTitle>
                <AppName>SpeakUP</AppName>
            </ContainerTitle>

            <ContainerForms>
                
                <Controller
                    name="email"
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputTxt
                            placeholder="Email"
                            keyboardType="email-address"
                            onChangeText={onChange}
                            value={value}
                            onBlur={onBlur}
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({field: {onChange, onBlur, value}})=> (
                        <InputTxt
                            placeholder="Senha"
                            secureTextEntry
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                        />
                    )}

                
                />                        
      
                <LoginButton onPress={handleSubmit(onSubmit)}>
                    <LoginText>Entrar</LoginText>
                </LoginButton>

            </ContainerForms>

            <ContainerForgotPassword>
                <ForgotPasswordButton>
                    <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
                </ForgotPasswordButton>
            </ContainerForgotPassword>

            <ContainerCreateAccount>
                <TitleCreateAccount>Não possui uma conta?</TitleCreateAccount>
                
                <CreateAccountButton onPress={() => handleCreateAccount()}>
                    <CreateAccountText>Criar uma nova conta</CreateAccountText>
                </CreateAccountButton>

            </ContainerCreateAccount>

        </SafeAreaView>
    )

}