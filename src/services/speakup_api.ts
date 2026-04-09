import { ISpeakupAPI } from "./interface/speakup_interface"
import { CreateRoomInput, RegisterInput, RoomOutput, UserResponse } from "./types/api_types"

class SpeakupAPI implements ISpeakupAPI{

    private api_url: string

    constructor(){
        this.api_url = process.env.EXPO_PUBLIC_SPEAKUP_API
    }

    async login(email: string, password: string):Promise<UserResponse>{

            const response = await fetch(`${this.api_url}/auth/login`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            return {
                ...await response.json(),
                status_code: response.status
            }

    }

    async register(data: RegisterInput): Promise<UserResponse>{

        const response = await fetch(`${this.api_url}/auth/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data
            })

        })

        return {
            ...await response.json(),
            status_code: response.status
        }

    }

    async create_room(data: CreateRoomInput):Promise<RoomOutput>{

        const response = await fetch(`${this.api_url}/room/create`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data
            })
        })
        
        return {
            ...await response.json(), 
            status_code: response.status
        }
    }

    async join_room(room_code: string):Promise<RoomOutput>{
        console.log(room_code)
        const response = await fetch(`${this.api_url}/room/join`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                room_code: room_code
            })
        })

        return {
            ...await response.json(), 
            status_code: response.status
        }
    } 
}

export const speakup_api = new SpeakupAPI()




