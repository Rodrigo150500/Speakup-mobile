import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
    home: {role: "TEACHER" | "STUDENT", name: string, grade?: string, section?: string, number?: number},
    login: undefined,
    register: undefined
    chat: {role: "TEACHER" | "STUDENT", roomCode: string, name?:string, nameRoom?:string}
}


export type HomeRouteProp = RouteProp<RootStackParamList, "home">

export type ChatRouteProp = RouteProp<RootStackParamList, "chat">
