import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Detail } from "../components/detail/Detail";
import {AccountPage} from "../pages/AccountPage";
import { BootcampDashboardPage } from "../pages/BootcampDashboardPage";
import { DashboardPage } from "../pages/DashboardPage";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import ProfileBootcampPage from "../pages/ProfileBootcampPage";



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

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ea561d'
      },
      // secondary: {
      //   main: '#f44336',
      // },
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
              <AccountPage />
            </AuthCrud>
          }
        />
        <Route
          path="/bootcamps/:id"
          element={
            <AuthCrud>
              <ProfileBootcampPage/>
            </AuthCrud>
        }
        />

      </Routes>
    </BrowserRouter>
    </ThemeProvider>

  );
}
