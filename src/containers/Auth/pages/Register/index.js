import React from 'react';
import { useSelector } from 'react-redux';
import Page from 'components/Page/Page'
import { ACCOUNT_BG } from 'constants/image'
import FormRegister from 'containers/Auth/components/FormRegister/FormRegister'
import ThirdParty from 'containers/Auth/components/ThirdParty/ThirdParty'
import { Link } from 'react-router-dom'
import Notify from 'components/Notify/Notify';
import './Register.scss'

export default function Register() {
    const { loading, error } = useSelector(state => state.auth)
    const status = {
        loading: loading,
        error: error,
        message: error || '',
    }
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
                            Already have an account?  <Link to="/login">Login now</Link>
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
