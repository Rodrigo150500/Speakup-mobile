import styled from "styled-components/native";

export const ContainerStudent = styled.View`

    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContainerUser = styled.View`

    margin: 0px 15px 0px 15px;
    display: flex;
    flex-direction: column;
    background-color: #5EF2D5;
    justify-content: center;
    align-items: center;
    border-radius: 24px;

`
export const Menu = styled.View`

    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const MenuStatus = styled.View`

    display: flex;
    flex-direction: row;
    background-color: #60B5FF;
    justify-content: space-around;
    align-content: center;
    height: 100px;
    width: 100%;
    margin-top: 24px;
    border-radius: 20px;

`
export const Status = styled.View`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #BDDBF5;
    margin: 10px;
    width: 25%;
    border-radius: 10px;
    padding: 5px;

`

export const Presence = styled.Text`

    font-size: 14px;

`

export const TopStudents = styled.Text`

    font-size: 14px;

`

export const FavoriteSubject = styled.Text`

    font-size: 14px;
`

export const ContainerRoom = styled.View`

    padding: 30px 20px 30px 20px;
    display: flex;
    flex-direction: column;   
    justify-content:center ;
    align-items: center;
    background-color: #5EF2D5;
    margin: 0px 15px 0px 15px;
    gap: 30px;
    border-radius: 25px;

`

export const TitleRoom = styled.Text`
    font-size: 24px;
    color: #fff;
`

export const InputCodeRoom = styled.TextInput`

    font-size: 18px;
    background-color: #FFE588;
    border-color: #F79D65;
    border: 1px;
    border-radius: 10px;
    width: 100%;

`

export const BtnEntry = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    background-color: #60B5FF;
    padding: 15px;
    width: 100%;
    border-radius: 10px;
`

export const BtnText = styled.Text`

    font-size: 24px;
    color: #fff;
`