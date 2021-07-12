import Page from 'components/Page/Page'
import { ACCOUNT_BG } from 'constants/image'
import FormRegister from 'containers/Auth/components/FormRegister/FormRegister'
import ThirdParty from 'containers/Auth/components/ThirdParty/ThirdParty'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Register.scss'

export default function Register() {
    return (
        <Page title="Register | UR-TICKET">
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
                        <div className="register__redirect">
                            Already have an account?  <NavLink to="/signin">Login now</NavLink>
                        </div>
                        <div className="or"><span className="relative">OR</span></div>
                        <ThirdParty />
                    </div>
                </div>
            </section>
        </Page>
    )
}
