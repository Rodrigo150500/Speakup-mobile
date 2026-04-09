import styled from "styled-components/native";

export const ContainerTeacher = styled.View`

    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContainerUser = styled.View`

    margin: 0px 15px 0px 15px;
    display: flex;
    flex-direction: column;
    background-color: #F79D65;
    justify-content: center;
    align-items: center;
    border-radius: 24px;

`

export const UserPhoto = styled.Image`
    margin-top: 20px;
    width: 150px;
    height: 150px;
`

export const UserInfo = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

`

export const Username = styled.Text`

    font-size: 18px;
    color: #fff;

`
export const StudentData = styled.Text`
    
    font-size: 18px;
    color: #fff;

`

export const Menu = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 20px;

`

export const MenuItemButton = styled.TouchableOpacity`

    background-color: #60B5FF;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-radius: 8px;

`
export const MenuItemText = styled.Text`

    font-size: 18px;
    color: #ffffff;
`


export const ContainerRoom = styled.View`

    padding: 30px 20px 30px 20px;
    display: flex;
    flex-direction: column;   
    justify-content:center ;
    align-items: center;
    background-color: #F79D65;
    margin: 0px 15px 0px 15px;
    gap: 30px;
    border-radius: 25px;

`

export const TitleRoom = styled.Text`
    font-size: 24px;
    color: #fff;
`

export const InputRoom = styled.TextInput`

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