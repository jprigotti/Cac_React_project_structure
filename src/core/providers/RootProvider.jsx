import React from "react";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "../auth/providers/AuthProvider"

const RootProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </HelmetProvider>
  );
};

export default RootProvider;
