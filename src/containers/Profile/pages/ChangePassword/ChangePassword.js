import React, { useEffect } from 'react';
import Page from 'components/Page/Page';
import { ACCOUNT_BG } from 'constants/image';
import Form from 'components/Form/Form';
import InputField from 'components/InputField/InputField';

import ButtonSubmit from 'components/ButtonSubmit/ButtonSubmit';
import * as yup from "yup";

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { userAPI } from 'apis';
import Notify from 'components/Notify/Notify';


const validationSchema = yup.object().shape({
    currentPassword: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    newPassword: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmNewPassword: yup.string()
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

export default function ChangePassword() {
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const [status, setStatus] = React.useState({
        loading: false,
        error: false,
        success: false,
        message: '',
    });

    useEffect(() => {
        if (!auth.isLoggedIn) {
            history.push('/login');
        }
    }, [auth.isLoggedIn, history]);

    const onSubmit = async (values) => {
        const { currentPassword, newPassword } = values;
        try {
            await userAPI.changePassword({ currentPassword, newPassword });
            setStatus({
                loading: false,
                error: false,
                success: true,
                message: 'Change password successfully',
            });
            setTimeout(() => {
                history.push('/');
            }, 3000);
        } catch (error) {
            setStatus({
                loading: false,
                error: true,
                message: error.message,
            });
        }
    };

    return (
        <Page title="Change Password | UR-TICKET">
            <section className="w-full h-screen bg-center bg-no-repeat bg-cover py-16 bg_img" style={{ backgroundImage: `url(${ACCOUNT_BG})` }}>
                <div className="max-w-lg mx-auto px-12 py-12 relative" style={{ backgroundColor: 'rgba(68, 90, 153, 0.051)', boxShadow: '0px 0px 29.4px 0.6px rgba(0, 0, 0, 0.5)' }}>
                    <div className=" text-center mb-8">
                        <span className="block text-2xl font-medium text-green-500 mb-3" >HELLO</span>
                        <h2 className="text-2xl font-bold">CHANGE YOUR PASSWORD</h2>
                    </div>

                    <div className="">
                        <Form onSubmit={onSubmit} validationSchema={validationSchema}>
                            <InputField name="currentPassword" type="password" label="CURRENT PASSWORD" />
                            <InputField name="newPassword" type="password" label="NEW PASSWORD" />
                            <InputField name="confirmNewPassword" type="password" label="CONFIRM PASSWORD" />

                            <ButtonSubmit name="Change Password" />
                        </Form>
                    </div>

                </div>
            </section>
            <Notify status={status} />
        </Page>
    )
}
