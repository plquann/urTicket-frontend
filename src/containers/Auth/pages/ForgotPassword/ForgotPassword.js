import React from 'react';
import Page from 'components/Page/Page';
import { ACCOUNT_BG } from 'constants/image';
import Form from 'components/Form/Form';
import InputField from 'components/InputField/InputField';

import ButtonSubmit from 'components/ButtonSubmit/ButtonSubmit';
import * as yup from "yup";

import { useHistory, useLocation } from 'react-router';
import { authAPI } from 'apis';
import Notify from 'components/Notify/Notify';

const validationEmailSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
});

const validationPasswordSchema = yup.object().shape({
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export default function ForgotPassword() {
    const history = useHistory();
    const location = useLocation();
    const token = location.search.length > 0 ? location.search.split('=')[1] : '';
    const [status, setStatus] = React.useState({
        loading: false,
        error: false,
        success: false,
        message: '',
    });


    const handleSubmitEmail = async (values) => {
        setStatus({
            loading: true,
            error: false,
            success: false,
            message: '',
        });
        const { email } = values;
        try {
            await authAPI.forgotPassword({ email });
            setStatus({
                loading: false,
                error: false,
                success: true,
                message: 'Email reset password is sent!',
            });
            setTimeout(() => {
                history.push('/');
            }, 3000);
        } catch (error) {
            setStatus({
                loading: false,
                error: true,
                success: false,
                message: error.message,
            });
        }
    };

    const handleResetPassword = async (values) => {
        setStatus({
            loading: true,
            error: false,
            success: false,
            message: '',
        });
        const { password } = values;
        try {
            await authAPI.resetPassword({ password, token });
            setStatus({
                loading: false,
                error: false,
                success: true,
                message: 'Reset password successfully',
            });
            setTimeout(() => {
                history.push('/');
            }, 3000);
        } catch (error) {
            setStatus({
                loading: false,
                error: true,
                success: false,
                message: error.message,
            });
        }
    };

    return (
        <Page title="Forgot Password | UR-TICKET">
            <section className="w-full h-screen bg-center bg-no-repeat bg-cover py-16 bg_img" style={{ backgroundImage: `url(${ACCOUNT_BG})` }}>
                <div className="max-w-lg mx-auto px-12 py-12 relative" style={{ backgroundColor: 'rgba(68, 90, 153, 0.051)', boxShadow: '0px 0px 29.4px 0.6px rgba(0, 0, 0, 0.5)' }}>
                    <div className=" text-center mb-8">
                        <h2 className="text-2xl font-bold">FORGOT PASSWORD</h2>
                    </div>

                    {location.search
                        ? <div className="">
                            <Form onSubmit={handleResetPassword} validationSchema={validationPasswordSchema}>
                                <InputField name="password" type="password" label="NEW PASSWORD" />
                                <InputField name="confirmPassword" type="password" label="CONFIRM PASSWORD" />

                                <ButtonSubmit name="RESET PASSWORD" />
                            </Form>
                        </div>
                        : <div className="">
                            <Form onSubmit={handleSubmitEmail} validationSchema={validationEmailSchema}>
                                <InputField name="email" type="text" label="EMAIL" />
                                <ButtonSubmit name="SEND EMAIL" />
                            </Form>
                        </div>
                    }
                </div>
            </section>
            <Notify status={status} />
        </Page>
    )
}
