import { CreateRoomInput, RegisterInput } from "../types/api_types"

export interface ISpeakupAPI{

    login: (email: string, password: string) => Promise<any>

    register: (data: RegisterInput) => Promise<any>
    
    create_room: (data: CreateRoomInput) => Promise<any>

    join_room: (code_room: string) => Promise<any>

}