import React from 'react'
import { Field, ErrorMessage, Formik } from 'formik'
import Select from 'react-select';
const SelectCustom = (props) => {
    const { label, name, options, ...rest } = props

    return (
        <div>
            <div className="h-80">
                <label htmlFor={name}><strong>{label}</strong></label>
                <Field as='select' id={name} name={name} {...rest}  
                component = {Select}
                
                // and do something about e
                // let someValue = e.currentTarget.value
                >
                    {options && options.length
                        ? options.map((item, index) => (
                            <option value={JSON.stringify(item.value)} key={index}> 
                                {item.key}
                            </option>
                        ))
                        : null}
                    {/* {options.map(option => {
                        return <option key={option.value} value={option.value}>{option.key}</option>
                    })} */}

                </Field>
                <ErrorMessage name={name} ></ErrorMessage>
            </div>
        </div>
    )
}

export default SelectCustom
