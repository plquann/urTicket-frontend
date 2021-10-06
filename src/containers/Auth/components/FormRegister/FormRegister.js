import React, { useEffect } from 'react';
import * as yup from "yup";
import Form from 'components/Form/Form';
import InputField from 'components/InputField/InputField';
import Loading from 'components/Loading/Loading';
import CheckBox from 'components/CheckBox/CheckBox';
import ButtonSubmit from 'components/ButtonSubmit/ButtonSubmit';
import { register } from 'app/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
        .isTrue('You must accept The Terms, Privacy Policy And Fees'),
});

export default function FormRegister() {
    const auth = useSelector(state => state.auth);
    const history = useHistory();

    useEffect(() => {
        if (auth.isLoggedIn) {
            history.push('/');
        }
    }, [auth.isLoggedIn, history]);

    const dispatch = useDispatch();

    const onSubmitForm = (data) => {
        dispatch(register(data));
    };

    return (
        <>
            {auth.loading
                ? <Loading />
                : <Form onSubmit={onSubmitForm} validationSchema={validationSchema}>
                    <InputField name="userName" type="text" label="USER NAME" />
                    <InputField name="email" type="text" label="EMAIL" />
                    <InputField name="password" type="password" label="PASSWORD" />
                    <InputField name="confirmPassword" type="password" label="CONFIRM PASSWORD" />
                    <CheckBox name="acceptTerms" label="I Agree To The Terms, Privacy Policy And Fees" />

                    <ButtonSubmit name="REGISTER" onSubmitForm={onSubmitForm} />
                </Form>
            }

        </>
    );
}