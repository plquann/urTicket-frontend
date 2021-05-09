import React from 'react';
import * as yup from "yup";
import Form from 'components/Form';
import InputField from 'components/InputField';
import CheckBox from 'components/CheckBox';
import ButtonSubmit from 'components/ButtonSubmit';


const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

export default function FormSignin() {
    const onSubmitForm = (data) => {
        console.log('🚀 ~ file: index.js ~ line 19 ~ FormSignin ~ data', data);
    };
    return (
        <>
            <Form onSubmit={onSubmitForm} validationSchema={validationSchema}>
                <InputField name="email" type="text" label="EMAIL" />
                <InputField name="password" type="password" label="PASSWORD" />
                <CheckBox name="rememberPW" label="Remember Password" />

                <ButtonSubmit name="Sign In" />
            </Form>
        </>
    );
}