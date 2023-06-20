import React from "react";
import { Link } from "react-router-dom";

const Links = ({ routes }) => {
  return (
    <>
      {routes.map((route) => (
        <Navbar.Item key={route.name}>
          <Link to={route.to}>
            <Text h5>{route.name}</Text>
          </Link>
        </Navbar.Item>
      ))}
    </>
  );
};

export default Links;
