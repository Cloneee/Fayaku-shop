import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const TextArea = (props) => {
    const { label, name, ...rest } = props
    return (
        <>
            <div className="form-outline">
                <Field as='textarea' id={name} name={name} {...rest} class="form-control" />
                <label class="form-label" for={name}><strong>{label}</strong></label>
                <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div>

            </div>
            <ErrorMessage name={name} component={TextError} />
        
        

        </>
    )
}

export default TextArea

    