import React from "react";
import Nav from "../../components/Nav/Nav";
import NavBar from "../../components/NavBar/NavBar";
import "./GeneralLayout.css"

const GeneralLayout = ({ children }) => {
  return (
    <div className="outer-container">
      <div className="main-container">
        {/* <Nav /> */}
        <NavBar />
        {children}
      </div>
    </div>

  );
};

export default GeneralLayout;