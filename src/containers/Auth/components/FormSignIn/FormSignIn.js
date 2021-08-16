import React from 'react';
import * as yup from "yup";
import Form from 'components/Form/Form';
import InputField from 'components/InputField/InputField';
import CheckBox from 'components/CheckBox/CheckBox';
import ButtonSubmit from 'components/ButtonSubmit/ButtonSubmit';


const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

export default function FormSignin(props) {
    const { onSubmit } = props;
  
    return (
        <>
            <Form onSubmit={onSubmit} validationSchema={validationSchema}>
                <InputField name="email" type="text" label="EMAIL" />
                <InputField name="password" type="password" label="PASSWORD" />
                <CheckBox name="rememberPW" label="Remember Password" />

                <ButtonSubmit name="Sign In" />
            </Form>
        </>
    );
}