import React, { useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"
import "./NavBar.css"
import "../../utils/generalStyles.css"
import { menus } from "./menus"
import Popover from './Popover'
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {

  const [showPopover, setShowPopover] = useState(false);



  return (
    <div className='navbar-outer-container'>
      <div className='navbar-container'>
        <div className="navbar-logo">
          Streamberry
        </div>
        <div className="navbar-links">
          <ul>
            {menus.map((menu, index) => {
              return (
                <li
                  key={index}>
                  <Link className="menu-style" to={menu.link}>{menu.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="navbar-login">
          <button
            className='btn-user'
            onClick={() => setShowPopover(!showPopover)}
          ><FaUserAlt size={20} />
          </button>
          {showPopover && <Popover />}
        </div>
      </div>
    </div>



  )
}

export default NavBar
