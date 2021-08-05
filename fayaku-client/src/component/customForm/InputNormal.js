import React from 'react'
import { Formik, Form,Field, ErrorMessage } from 'formik';
import TextError from './TextError';


const InputNormal = (props) => {
    const {label,name, ...rest} = props
    return (
        <>
        <div className="form-outline">
            {/* <label htmlFor={name}></label> */}
            <Field id={name} name={name} {...rest} class="form-control" autofocus />

            <label class="form-label active" for={name}><strong>{label}</strong></label>

            <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>
            
            
        </div>
        <ErrorMessage name = {name} component={TextError}/>
        </>
    )
}

export default InputNormal
