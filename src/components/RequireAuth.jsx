import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const RequireAuth = ({ children, redirect }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to={redirect} />;
}

export default RequireAuth;
