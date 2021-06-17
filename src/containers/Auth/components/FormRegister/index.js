import React from 'react';
import * as yup from "yup";
import Form from 'components/Form';
import InputField from 'components/InputField';
import CheckBox from 'components/CheckBox';
import ButtonSubmit from 'components/ButtonSubmit';

const validationSchema = yup.object().shape({
    userName: yup.string()
        .required('First Name is required'),
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: yup.bool()
        .oneOf([true], 'We need you to agree with the terms')
});

export default function FormRegister() {
    const onSubmitForm = (data) => {
        console.log('🚀 ~ file: index.js ~ line 27 ~ FormRegister ~ data', data);
    };

    return (
        <>
            <Form onSubmit={onSubmitForm} validationSchema={validationSchema}>
                <InputField name="userName" type="text" label="USER NAME" />
                <InputField name="email" type="text" label="EMAIL" />
                <InputField name="password" type="password" label="PASSWORD" />
                <InputField name="confirmPassword" type="password" label="CONFIRM PASSWORD" />
                <CheckBox name="acceptTerms" label="I Agree To The Terms, Privacy Policy And Fees" />

                <ButtonSubmit name="REGISTER" />
            </Form>
        </>
    );
}