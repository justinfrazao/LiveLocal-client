import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

const NavigateUser = ({ children, redirect }) => {
  const { currentUser } = useAuth();

  return currentUser ? <Navigate to={redirect}/> : children ;
}

export default NavigateUser;
