import React from "react";

import { Image, Navbar, Text } from "@nextui-org/react";
import { routes } from "../../core/router/appRouter";

import Links from "./Links";
import logoSrc from "../../assets/logo.svg";

const Nav = () => {
  return (
    <Navbar>
      <Navbar.Content>
        <Navbar.Brand>
          <Image height={50} width={50} src={logoSrc} />
        </Navbar.Brand>
        <Links routes={routes} />
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
