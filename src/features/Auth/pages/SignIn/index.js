import { ACCOUNT_BG } from 'constants/image';
import FormSignin from 'features/Auth/components/FormSignIn';
import ThirdParty from 'features/Auth/components/ThirdParty';
import React from 'react';
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

                <div className="signin__wrapper__option">
                    <div className="signup">
                        Don't have an account? <a href="sign-up.html">sign up now</a>
                    </div>
                    <div className="or"><span className="relative">OR</span></div>
                    <ThirdParty />
                </div>
            </div>
        </section>
    )
}
