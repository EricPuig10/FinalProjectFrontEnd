import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export default function Router() {
  const AuthRoute = ({ children }) => {
    if (localStorage.getItem("auth_token")) {
      return <Navigate to="/" />;
    }
    return children;
  };
  
  const AuthCrud = ({ children }) => {
    if (!localStorage.getItem("auth_token")) {
      return <Navigate to="/auth/signin" />;
    }
    return children;
  };
  
  

  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} />
        <Route path="/dashboard" element={<AuthCrud><DashboardPage /></AuthCrud>} />

      </Routes>
    </BrowserRouter>
  );
}
