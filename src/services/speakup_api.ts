import { ISpeakupAPI } from "./interface/speakup_interface"
import { CreateRoomInput, RegisterInput } from "./types/api_types"

class SpeakupAPI implements ISpeakupAPI{

    private api_url: string

    constructor(){
        this.api_url = process.env.EXPO_PUBLIC_SPEAKUP_API
    }

    async login(email: string, password: string){

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

        return response

    }

    async register(data: RegisterInput){

        const response = await fetch(`${this.api_url}/auth/register`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data
            })

        })

        return response

    }

    async create_room(data: CreateRoomInput){

        const response = await fetch(`${this.api_url}/room/create`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data
            })
        })
        
        return response
    }

    async join_room(code_room: string){

        const response = await fetch(`${this.api_url}/room/join`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code_room: code_room
            })
        })

        return response

    } 
}




