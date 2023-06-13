import React from "react";
import Nav from "../../components/Nav/Nav";

const GeneralLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Nav />
      {children}
    </div>
  );
};

export default GeneralLayout;
