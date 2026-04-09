import { SafeAreaView } from "react-native-safe-area-context"

import styled from "styled-components/native";

export const ContainerRegister = styled(SafeAreaView)`

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`
export const Title = styled.Text`

    font-size: 36px;
    color: #3F3F3F;
    text-align: center;

`

export const InputGroup = styled.View`

    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;

`
export const EntryField = styled.View`

    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 80%;

`

export const Label = styled.Text`

    font-size: 18px;
    color: #F79D65;

`

export const RegistryButton = styled.TouchableOpacity`

    background-color: #60B5FF;
    border-radius: 10px;
    elevation: 5;
    width: 80%;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
`

export const RegistryText = styled.Text`

    font-size: 24px;
    color: #fff;

`

export const EntryContainer = styled.View`
    
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 5px;
`

export const AlredyHasAccount = styled.Text`
    font-size: 18px;
    color: #3F3F3F;

`

export const EntryButton = styled.TouchableOpacity`


`

export const EntryText = styled.Text`

    font-size: 18px;
    color: #F79D65;
    font-weight: bold;

`