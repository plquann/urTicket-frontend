import { ACCOUNT_BG } from 'constants/image'
import FormRegister from 'features/Auth/components/FormRegister'
import ThirdParty from 'features/Auth/components/ThirdParty'
import React from 'react'
import './Register.scss'

export default function Register() {
    return (
        <section className="register" style={{ backgroundImage: `url(${ACCOUNT_BG})` }}>
            <div className="register__wrapper">
                <div className="register__wrapper__greeting ">
                    <span >WELCOME</span>
                    <h2>TO UR TICKET</h2>
                </div>

                <div className="register__wrapper__form">
                    <FormRegister />
                </div>

                <div className="register__wrapper__option">
                    <div className="signin">
                        Already have an account?  <a href="1">Login</a>
                    </div>
                    <div className="or"><span className="relative">OR</span></div>
                    <ThirdParty />
                </div>
            </div>
        </section>
    )
}
