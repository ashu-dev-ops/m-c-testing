import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { logIn } = useSelector((store) => store.user);
  console.log(logIn);
  //   const navigate = useNavigate();
  if (!logIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
