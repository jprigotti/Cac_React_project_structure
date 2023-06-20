import React, { useState, useRef } from 'react'
import {
    signInWithEmail,
    signInWithGoogle
} from "../../../services/firebase.services";
import { useAuth } from "../../../core/auth/hooks/useAuth";
import { AUTH_LOGIN, authKey } from "../../../core/auth/reducers/authReducer"

const useLogin = () => {

    const { dispatch: dispatchAuth } = useAuth();
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState('error test');

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const _saveInStorage = async (response) => {
        localStorage.setItem(
            authKey,
            JSON.stringify({
                isAuth: true,
                user: response.user,
            })
        );
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        setError('');
        emailRef.current.classList.remove('input-error');
        passwordRef.current.classList.remove('input-error');
    }



    const signInWithEmailHook = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = formValues;
            console.log(email, password);
            const response = await signInWithEmail(email, password);
            console.log(response);
            //use dispatch reducer to update login state
            dispatchAuth({
                type: AUTH_LOGIN,
                payload: response.user,
            });

            //use local _saveInStorage to store value in local storage
            _saveInStorage(response);

        } catch (firebaseError) {
            setError(firebaseError.code);
            emailRef.current.classList.add('input-error');
            passwordRef.current.classList.add('input-error');
            console.log("error: ", firebaseError.code);
        }
    }

    const signInWithGoogleHook = async (e) => {
        e.preventDefault();
        try {
            const response = await signInWithGoogle();
            console.log(response);
            //use dispatch reducer to update login state
            dispatchAuth({
                type: AUTH_LOGIN,
                payload: response.user,
            });

            //use local _saveInStorage to store value in local storage
            _saveInStorage(response);

        } catch (firebaseError) {
            console.log("error: ", firebaseError.code);
        }
    }

    return { formValues, setFormValues, signInWithEmailHook, signInWithGoogleHook, handleChange, error, setError, emailRef, passwordRef }
}

export default useLogin
