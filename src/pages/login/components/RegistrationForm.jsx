import React, {useState} from 'react'
import FormStyle1 from '../../../components/FormStyle1';
import useRegistration from '../hooks/useRegistration';
import "./style.css"

const RegistrationForm = ({isRegistered, setIsRegistered}) => {
    const {formValues, setFormValues} = useRegistration();

return(
<div>
<FormStyle1.div>
                <FormStyle1.h1>Sign up</FormStyle1.h1>
                <FormStyle1.form onSubmit={(e) => signInWithEmailHook(e)}>
                    <FormStyle1.input
                        type="email"
                        name="email"
                        placeholder='E-mail'
                        onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                        required />

                    <FormStyle1.input
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                        required />

                    <FormStyle1.input
                        type="password"
                        name="password"
                        placeholder='Password'
                        onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                        required />

                    <FormStyle1.button
                        type='submit'
                        >
                        Sign up
                    </FormStyle1.button>
                </FormStyle1.form>
                <p>Already have an account?<span><button className='btn-anchor' onClick={()=>{
                    console.log(isRegistered);
                    setIsRegistered(!isRegistered)}}>Log in</button></span> </p>
            </FormStyle1.div>
</div>
)

}

export default RegistrationForm
