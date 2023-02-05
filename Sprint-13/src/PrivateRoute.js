import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ inputValue }) {
  return inputValue ? <Outlet /> : <Navigate to="/" />;
}