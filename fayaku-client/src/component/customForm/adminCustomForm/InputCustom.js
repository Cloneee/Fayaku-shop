import React from 'react'
import { FormItem, Input } from 'formik-antd';



const InputCustom = (props) => {
    const { label, name, tooltip, defaultValue, ...rest } = props

    return (
        <div className="">
            {/* <label htmlFor={name}>{label}</label> */}



            <FormItem
                name={name}
                label={label}
                required={true}
                hasFeedback={true}
                showValidateSuccess={true}

                // validate="required"
            >
                <Input as="input" id={name} name={name} {...rest} 
                     placeholder={label} 
                    
                />
            </FormItem>

            {/* <ErrorMessage name={name} component={TextError} /> */}
        </div>
    )
}

export default InputCustom

