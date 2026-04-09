import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Viewport = styled(SafeAreaView)`

    flex: 1;
    width: 100%;


`

export const Title = styled.Text`

    font-size: 24px;
    color: #3F3F3F;
    text-align: center;
    margin-bottom: 20px;

`

export const NoMessages = styled.Text`
    font-size: 18px;
    color: #3F3F3F;
    text-align: center;
    margin-bottom: 20px;
`


export const CardQuestion = styled.View`

    flex-direction: column;
    justify-content: space-between;
    background-color: #FFE588;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 90%;
    align-self: center;
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

export const UserInfo = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

`