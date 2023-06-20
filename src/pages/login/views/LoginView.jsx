import React , {useEffect, useState} from "react";
import { Helmet } from "react-helmet-async";
import "./LoginView.css"
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const LoginView = () => {

  const [isRegistered, setIsRegistered] = useState(true); 

  return (
    <div className="outer-container-wallpaper">
      <div className="main-container">
        <Helmet>
          <title>Login View</title>
          <meta name="description" content="Login" />
        </Helmet>
        
        {isRegistered ? <LoginForm isRegistered={isRegistered} setIsRegistered={setIsRegistered} />: 
        <RegistrationForm isRegistered={isRegistered} setIsRegistered={setIsRegistered}/>}
        
      </div>

    </div>
  );
};

export default LoginView;
