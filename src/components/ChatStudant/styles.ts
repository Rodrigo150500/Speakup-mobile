import styled from "styled-components/native";


export const Container = styled.View`

    display: flex;
    flex-direction: column;
    align-items: center;

`

export const CardQuestion = styled.View`

    display: flex;
    background-color: #FFE588;
    width: 80%;
    height: 100px;
`

export const Question = styled.Text`

    font-size: 18px;

`

export const InputQuestion = styled.TextInput`

    font-size: 14px;
    border: 1px;
    width: 90%;
    height: 100px;
    background-color: #fff;
    border-color: #DBDBDB;
    border-radius: 10px ;

`

export const BtnSend = styled.Button`

    background-color: #60B5FF;
    width: 90%;
    height: 50px;
    color: red;

`