import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages/ProfilePage";
import { BootcampDashboardPage } from "../pages/BootcampDashboardPage";
import { CandidatsByBootcampPage } from "../pages/CandidatsByBootcampPage";
import { DashboardPage } from "../pages/DashboardPage";
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
              <ProfilePage />
            </AuthCrud>
          }
        />
        <Route
          path="/create"
          element={
            <AuthCrud>
              <ProfilePage />
            </AuthCrud>
          }
        />
        <Route
          path="/bootcamps/:id/candidats"
          element={
            <AuthCrud>
              <CandidatsByBootcampPage />
            </AuthCrud>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
