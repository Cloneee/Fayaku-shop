import React from 'react'
import { Formik, Form,Field, ErrorMessage } from 'formik';
import TextError from './TextError';


const Input = (props) => {
    const {label,name, ...rest} = props
    
    return (
        <div className="">
            <label htmlFor={name}><strong>{label}</strong></label>
            <Field id={name} name={name} {...rest} class="form-control" />
            
            <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

            <ErrorMessage name = {name} component={TextError}/>
        </div>
    )
}

export default Input
