import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from "../themes/themes";

const RootProvider = ({ children }) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <HelmetProvider>{children}</HelmetProvider>
    </NextUIProvider>
  );
};

export default RootProvider;
