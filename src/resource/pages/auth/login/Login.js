import React, { useState } from 'react';
import loginWrapper from '../../../../assets/images/loginWrapper.webp';
import Layout from '../../../../layout/Layout';
import Button from '../../../components/buttons/Button';
import Input from '../../../components/input/input';
import emailIcon from '../../../../assets/icons/mail.png'
import passwordIcon from '../../../../assets/icons/password.png'
import './Login.css'

function Login({
    onSubmit = () => { },
}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Layout sidebarItem={false} title="LOGIN PAGE">
            <div className="login-component">
                <div className="login-wrapper">
                    <img className="login-header-image" src={loginWrapper} alt="login_page" />
                    <div className="login-details-wrapper">
                        <div className="login-header-title">login</div>
                        <Input
                            onChange={(e) => {
                                setEmail && setEmail(e.target.value);
                            }}
                            value={email}
                            label="Email"
                            hint={false}
                            size="md"
                            icon={<img src={emailIcon} className="input-icon-login" />}
                        />
                        <Input
                            onChange={(e) => {
                                setPassword && setPassword(e.target.value);
                            }}
                            value={password}
                            label="Password"
                            hint={false}
                            size="md"
                            icon={<img src={passwordIcon} className="input-icon-login" />}
                        />
                        <br />
                        <br />
                        <div>
                            <Button
                                className="login-button"
                                type="primary"
                                size="full"
                                onClick={() => onSubmit()}
                                label="Get Started"
                            // disabled={!(email && email.length > 10)}
                            />
                        </div>
                        <div className="login-details-footer">
                            <div>CREATE ACCOUNT</div>
                            <div>NEED HELP?</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login