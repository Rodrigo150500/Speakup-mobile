import styled from "styled-components/native";

export const Viewport = styled.View`

    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const ContainerQuestion = styled.View`

    display: flex;
    flex: 1;
    width: 90%;
    height: 200px;
    margin-bottom: 20px;
    margin-top: 20px;

`


export const CardQuestion = styled.TextInput`

    padding: 10px;
    font-size: 18px;
    color: #3F3F3F;
    background-color: #FFE588;
    border-radius: 10px;
    margin: 5px;
    width: 100%;
    

`

export const CardQuestions = styled.View`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFE588;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;

`

export const Question = styled.Text`

    font-size: 18px;
    color: #3f3f3f;

`

export const CardUserInfo= styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-between;

`

export const Author = styled.Text`

    font-size: 14px;
    color: #60B5FF;

`

export const MessageDate = styled.Text`

    font-size: 14px;
    color: #60B5FF;
`



export const ContainerQuestionInput = styled.View`

    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    `

export const InputQuestion = styled.TextInput`

    font-size: 18px;
    border: 1px;
    width: 100%;
    height: 100px;
    background-color: #fff;
    border-color: #DBDBDB;
    border-radius: 10px ;
    margin-bottom: 20px;

`

export const ButtonSend = styled.TouchableOpacity`

    background-color: #60B5FF;
    width: 100%;
    color: red;
    padding: 10px;
    border-radius: 5px;

`

export const ButtonSendtText = styled.Text`
    text-align: center;
    font-size: 24px;
    color: #fff;
    font-weight: bold;

`