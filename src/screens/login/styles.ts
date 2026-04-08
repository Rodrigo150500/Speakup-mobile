import styled from "styled-components/native";

export const ContainerLogo = styled.View`

    display: flex;
    justify-content: center;
    align-items: center;

`

export const Logo = styled.Image.attrs({
   
    resizeMode: "contain"
})`
    width: 150px;

`

export const ContainerTitle = styled.View`

    display: flex;
    justify-content: center;
    align-items: center;

`

export const AppName = styled.Text`

    font-size: 36px;
    color: #092136;

`

export const ContainerForms = styled.View`
    display: "flex";
    justify-content: "space-between";
    background-color: "#6262e9";
    gap: 20px;
    margin: 10px;
    width: 80%;

`

export const LoginButton = styled.TouchableOpacity`
    background-color: #60B5FF;
    padding: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    elevation: 5;
`

export const LoginText = styled.Text`

    color: #fff;
    font-size: 24px;

`

export const ContainerForgotPassword = styled.View`

    display: flex;
    width: 80%;
    flex-direction: row-reverse;
    justify-content: start;


`

export const ForgotPasswordButton = styled.TouchableOpacity`

    display: flex;

`

export const ForgotPasswordText = styled.Text`

    font-size: 14px;
    font-style: italic;
    color: #3F3F3F;
`

export const ContainerCreateAccount = styled.View`

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    width: 80%;

`

export const TitleCreateAccount = styled.Text`

    font-size: 18px;
    color: #3F3F3F;
    text-align: center;

`

export const CreateAccountButton = styled.TouchableOpacity`

    background-color: #60B5FF;
    width: 100%;
    border-radius: 10px;

`

export const CreateAccountText = styled.Text`

    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 19px;

`
