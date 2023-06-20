import React, { useEffect, useState } from 'react'
import FormStyle1 from '../../../components/FormStyle1';
import ButtonStyles from '../../../components/ButtonStyles';
import useLogin from '../hooks/useLogin';
import "./style.css"
import "../../../utils/generalStyles.css"
import { FaAngleLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';


const LoginForm = ({ isRegistered, setIsRegistered }) => {
    const { signInWithEmailHook, signInWithGoogleHook, error, setError, handleChange, emailRef, passwordRef } = useLogin();
    const navigate = useNavigate();



    const [loginMode, setLoginMode] = useState('chooseLogin');
    const loginOpctions = {
        LOGIN_WITH_EMAIL: "loginWithEmail",
        CHOOSE_LOGIN: "chooseLogin"
    }

    useEffect(() => {
        setError('');
    }, []);

    const handleNavigation = () => {
        navigate("/",
            { replace: true });
    }

    return (
        <div>
            <FormStyle1.div>

                {loginMode === loginOpctions.LOGIN_WITH_EMAIL && (
                    <>

                        <div className="returnArrow-container">
                            <FaAngleLeft className='returnArrow' size={40}
                                onClick={() => setLoginMode(loginOpctions.CHOOSE_LOGIN)} />
                        </div>

                        <FormStyle1.h1>Sign in</FormStyle1.h1>
                        <FormStyle1.form onSubmit={(e) => signInWithEmailHook(e)}>
                            <FormStyle1.input
                                ref={emailRef}
                                type="email"
                                name="email"
                                placeholder='E-mail'
                                onChange={(e) => handleChange(e)}
                                required />

                            <FormStyle1.input
                                ref={passwordRef}
                                type="password"
                                name="password"
                                placeholder='Password'
                                onChange={(e) => handleChange(e)}
                                required />

                            <FormStyle1.button
                                type='submit'>
                                Sign In
                            </FormStyle1.button>

                        </FormStyle1.form>

                    </>)
                }

                {loginMode === loginOpctions.CHOOSE_LOGIN && (<>
                    <div className="returnArrow-container">
                        <FaAngleLeft className='returnArrow' size={40}
                            onClick={handleNavigation} />
                    </div>
                    <FormStyle1.h1>Sign in with</FormStyle1.h1>
                    <ButtonStyles.loginWith
                        className='mb-1'
                        onClick={() => setLoginMode(loginOpctions.LOGIN_WITH_EMAIL)}>Email</ButtonStyles.loginWith>
                    <ButtonStyles.loginWith
                        onClick={signInWithGoogleHook}><span><FcGoogle size={20} /></span>  Google</ButtonStyles.loginWith>


                </>)
                }

                <p className="message-error">{error}</p>
                <p className='mt-2'>Don't have an account yet?<span><button className='btn-anchor' onClick={() => {
                    console.log(isRegistered);
                    setIsRegistered(!isRegistered)
                }}>Sign up</button></span> </p>

            </FormStyle1.div>

        </div>
    )
}

export default LoginForm
