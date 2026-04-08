import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
    home: {role: "TEACHER" | "STUDENT"},
    login: undefined,
    register: undefined
    chat: {role: "TEACHER" | "STUDENT", room_code: string}
}


export type HomeRouteProp = RouteProp<RootStackParamList, "home">

export type ChatRouteProp = RouteProp<RootStackParamList, "chat">