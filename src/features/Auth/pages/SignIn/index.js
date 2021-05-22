import { ACCOUNT_BG } from 'constants/image';
import FormSignin from 'features/Auth/components/FormSignIn';
import ThirdParty from 'features/Auth/components/ThirdParty';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignIn.scss';

export default function SignIn() {
    return (
        <section className="signin bg_img" style={{ backgroundImage: `url(${ACCOUNT_BG})` }}>
            <div className="signin__wrapper">
                <div className="signin__wrapper__greeting ">
                    <span >HELLO</span>
                    <h2>WELCOME BACK</h2>
                </div>

                <div className="signin__wrapper__form">
                    <FormSignin />
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
    )
}
