import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ProfilePage } from "../pages/ProfilePage";
import { BootcampDashboardPage } from "../pages/BootcampDashboardPage";
import { CandidatsByBootcampPage } from "../pages/CandidatsByBootcampPage";
import { DashboardPage } from "../pages/DashboardPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import ProfileBootcampPage from "../pages/ProfileBootcampPage";
import { Error404 } from "../pages/Error404";
import ProcessPage from "../pages/ProcessPage";

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

  const AuthAdmin = ({ children }) => {
    if (!localStorage.getItem("auth_user")) {
      return <Navigate to="/" />;
    }
    return children;
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ea561d",
      },
      typography: {
        fontFamily: "Poppins",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
          <Route
            path="/bootcamps/:id"
            element={
              <AuthCrud>
                <ProfileBootcampPage />
              </AuthCrud>
            }
          />
          <Route
            path="/bootcamps/create"
            element={
              <AuthCrud>
                <ProfileBootcampPage />
              </AuthCrud>
            }
          />
          <Route
            path="/process"
            element={
              <AuthCrud>
                <ProcessPage />
              </AuthCrud>
            }
          />
          {/* protegir ruta només per admin master */}
          <Route
            path="/signup"
            element={
              <AuthAdmin>
                <SignupPage />
              </AuthAdmin>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
