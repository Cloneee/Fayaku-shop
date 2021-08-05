import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';



const InputCustom = (props) => {
    const { label, name, tooltip, placeholder,defaultValue, ...rest } = props

    return (
        <div className="">
            <label htmlFor={name}>{label}</label>
            
            {/* <Form.Item label={label} required tooltip={tooltip}>
            </Form.Item> */}
            <Field as="input" id={name} name={name} {...rest}  defaultValue={defaultValue}
                component={Input} placeholder={placeholder}  size= "large"
                tooltip={{
                    title: {tooltip},
                    icon: <InfoCircleOutlined />,
                  }}
                />
            {/* <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px" }}></div><div class="form-notch-middle" style={{ width: "114.4px" }}></div><div class="form-notch-trailing"></div></div> */}

            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default InputCustom

