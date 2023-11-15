import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Login = {
  isLogin: boolean;
  role: string;
};

const data: Login = {
  isLogin: true,
  role: "admin",
};

// PrivateRoute  Admin
export const PrivateRouteAdmin: React.FC = () => {
  if (!data.isLogin || data.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

// PrivateRoute  User
export const PrivateRouteUser: React.FC = () => {
  if (!data.isLogin || data.role !== "user") {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
