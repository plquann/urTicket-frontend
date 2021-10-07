import React, { useEffect } from 'react';
import Page from 'components/Page/Page';
import { ACCOUNT_BG } from 'constants/image';
import FormSignin from 'containers/Auth/components/FormSignIn/FormSignIn';
import ThirdParty from 'containers/Auth/components/ThirdParty/ThirdParty';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './SignIn.scss';
import { login } from 'app/authSlice';
import Notify from 'components/Notify/Notify';

export default function SignIn() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const status = {
        loading: auth.loading,
        error: auth.error,
        message: auth.error || '',
    }

    useEffect(() => {
        if (auth.isLoggedIn) {
            history.push('/');
        }
    }, [auth.isLoggedIn, history]);

    const onSubmit = (values) => {

        dispatch(login(values));
    };

    return (
        <Page title="Login | UR-TICKET">
            <section className="signin bg_img" style={{ backgroundImage: `url(${ACCOUNT_BG})` }}>
                <div className="signin__wrapper">
                    <div className="signin__wrapper__greeting ">
                        <span >HELLO</span>
                        <h2>WELCOME BACK</h2>
                    </div>

                    <div className="signin__wrapper__form">
                        <FormSignin onSubmit={onSubmit} />
                    </div>
                    <Link to="/forgot-password" className="forget-pass">Forget Password</Link>

                    <div className="signin__wrapper__option">
                        <div className="signin__redirect">
                            Don't have an account? <Link to="/register">Sign up now</Link>
                        </div>
                        <div className="or"><span className="relative">OR</span></div>
                        <ThirdParty />
                    </div>
                </div>
            </section>
            <Notify status={status} />
        </Page>
    )
}
