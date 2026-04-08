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


export type UserResponse = {
  operation: string,
  count: number,
  attributes: {
    id: string,
    name: string,
    email: string,
    created_at: Date,
    role: "TEACHER"| "STUDENT",
    teacher?:{
        id: string,
        user_id: string
    }
    student?: {
      id: string,
      user_id: string,
      grade: string,
      section: string,
      number: number
    }
  },status_code: number

}

export type RoomOutput =  {
    operation: string,
    count: number,
    attributes: {
        id: string,
        room_code: string,
        created_at: Date,
        name: string
    },
    status_code: number
}

