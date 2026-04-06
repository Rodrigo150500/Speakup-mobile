export type RegisterInput = {
    name: string, 
    email: string, 
    password: string, 
    grade?: string, 
    section?: string, 
    role: 'STUDENT' | "TEACHER"
}

export type CreateRoomInput = {
    name: string,
    room_code: string
}

