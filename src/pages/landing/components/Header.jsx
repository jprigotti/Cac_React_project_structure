import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"




const Header = () => {
    return (
      <div className='header-container row'>
        <div className="header-logo col-2">
          Streamberry
        </div>
        <div className="header-signin">
          <Link className='btn-signin' to="/auth">Sign in</Link>
        </div>
  
      </div>
    )
  }

export default Header
