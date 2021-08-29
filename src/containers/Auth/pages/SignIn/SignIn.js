import React, { useEffect } from 'react';
import Page from 'components/Page/Page';
import { ACCOUNT_BG } from 'constants/image';
import FormSignin from 'containers/Auth/components/FormSignIn/FormSignIn';
import ThirdParty from 'containers/Auth/components/ThirdParty/ThirdParty';
import Loading from 'components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './SignIn.scss';
import { login } from 'app/authSlice';

export default function SignIn() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

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
            {auth.loading
                ? <Loading />
                : <section className="signin bg_img" style={{ backgroundImage: `url(${ACCOUNT_BG})` }}>
                    <div className="signin__wrapper">
                        <div className="signin__wrapper__greeting ">
                            <span >HELLO</span>
                            <h2>WELCOME BACK</h2>
                        </div>

                        <div className="signin__wrapper__form">
                            <FormSignin onSubmit={onSubmit} />
                        </div>
                        <a href="#0" className="forget-pass">Forget Password</a>

                        <div className="signin__wrapper__option">
                            <div className="signin__redirect">
                                Don't have an account? <NavLink to="/register">Sign up now</NavLink>
                            </div>
                            <div className="or"><span className="relative">OR</span></div>
                            <ThirdParty />
                        </div>
                    </div>
                </section>
            }

        </Page>
    )
}
