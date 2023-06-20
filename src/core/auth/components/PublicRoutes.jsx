import React from "react";
import { useAuth } from "../../auth/hooks/useAuth"
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { state } = useAuth();

  if (state.isAuth) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default PublicRoutes;
