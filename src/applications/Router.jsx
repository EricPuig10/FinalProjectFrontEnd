import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Detail } from "../components/detail/Detail";
import {AccountPage} from "../pages/AccountPage";
import { BootcampDashboardPage } from "../pages/BootcampDashboardPage";
import { DashboardPage } from "../pages/DashboardPage";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export default function Router() {
  const AuthRoute = ({ children }) => {
    if (localStorage.getItem("auth_token")) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const AuthCrud = ({ children }) => {
    if (!localStorage.getItem("auth_token")) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route
          path="/candidats"
          element={
            <AuthCrud>
              <DashboardPage />
            </AuthCrud>
          }
        />
        <Route
          path="/bootcamps"
          element={
            <AuthCrud>
              <BootcampDashboardPage />
            </AuthCrud>
          }
        />
        <Route
          path="/candidats/:id"
          element={
            <AuthCrud>
              <AccountPage />
            </AuthCrud>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
