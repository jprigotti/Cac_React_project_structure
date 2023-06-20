import React from 'react'
import "./NavBar.css"
import { useAuth } from '../../core/auth/hooks/useAuth'
import {AUTH_LOGOUT, authKey} from "../../core/auth/reducers/authReducer"

const Popover = () => {
  
  const {state, dispatch: dispatchAuth} = useAuth();

  const handleLogout = () => {
    dispatchAuth({
      type: AUTH_LOGOUT,
    });
    localStorage.removeItem(authKey);
  }

  return (
    <div className='popover-container'>
      <p className="popover-item">{state.user.email}</p>
      <div className='separator-line'></div>
        <button 
        className='btn-logout mx-2'
        onClick={handleLogout}>
          Logout
        </button>
    </div>
  )
}

export default Popover
