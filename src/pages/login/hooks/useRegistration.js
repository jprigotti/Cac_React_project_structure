
import React, { useState } from 'react'

const useRegistration = () =>{

    const [formValues, setFormValues] = useState({
        email: "",
        password1: "",
        password2: ""
    })

    return { formValues, setFormValues}
}

export default useRegistration;