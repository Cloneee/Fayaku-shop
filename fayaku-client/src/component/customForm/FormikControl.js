import React from 'react'
import InputCustom from './adminCustomForm/InputCustom'
import SelectCustom from './adminCustomForm/SelectCustom'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'

const FormikControl = (props) => {
    const {control, ...rest} = props
    switch(control){
        case 'input': return <InputCustom {...rest} />
        case 'textarea': return <TextArea {...rest}/>
        case 'select': return <SelectCustom {...rest}/> 
        case 'radio': 
        case 'checkbox': 
        case 'date':
        default: return null
    }
  
}

export default FormikControl
