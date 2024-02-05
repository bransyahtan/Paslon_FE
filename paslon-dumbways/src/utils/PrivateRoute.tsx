// import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

type Login = {
  isLogin: boolean;
  role: string;
};

const data: Login = {
  isLogin: true,
  role: "user",
};

// console.log(token);
// type User = {
//   userId: number;
//     username: string;
//     iat: number;
//     exp: number;
// }
// let user: User;
// if (token) {
//    user = jwtDecode<{
//     userId: number;
//     username: string;
//     iat: number;
//     exp: number;
//   }>(token);
// }

// PrivateRoute  Admin
// const token = localStorage.getItem("token");
export const PrivateRouteAdmin: React.FC = () => {
  if (data.role !== "admin") {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

// PrivateRoute  User
export const PrivateRouteUser: React.FC = () => {
  if (data.role !== "user") {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
