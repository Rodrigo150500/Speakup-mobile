import { TextField } from "./styles"
import { TextInputProps } from "react-native"

export function InputTxt(data: TextInputProps){

    return (
        <TextField
             {...data}
        />
    )

}

