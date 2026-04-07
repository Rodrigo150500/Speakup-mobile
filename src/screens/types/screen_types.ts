import { RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
    home: {role: "TEACHER" | "STUDENT"},
    login: undefined,
    register: undefined
}

export type HomeRouteProp = RouteProp<RootStackParamList, "home">