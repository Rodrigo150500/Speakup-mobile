import { TextField } from "./styles"
import { TextInputProps } from "react-native"

export function InputTxt(data: TextInputProps){

    return (
        <TextField
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
             {...data}
        />
    )

}

