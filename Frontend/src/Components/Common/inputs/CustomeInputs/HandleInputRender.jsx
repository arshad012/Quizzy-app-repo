import CustomCheckbox from "../CustomCheckbox"
import CustomDropDownInput from "../CustomDropdownInput"
import CustomTextArea from "../CustomTextArea"
import CustomTextInput from "../CustomTextInput"
import { InputTypes } from "./types"


function HandleInputRender({inputType, ...props}) {
    switch(inputType) {
        case InputTypes.TEXT :
            return <CustomTextInput {...props} />
        case InputTypes.MULTILINE : 
            return <CustomTextArea {...props} />
        case InputTypes.DROP_DOWN :
            return <CustomDropDownInput {...props} />
        case InputTypes.CHECKBOX : 
            return <CustomCheckbox {...props} />
    }
}

export default HandleInputRender
