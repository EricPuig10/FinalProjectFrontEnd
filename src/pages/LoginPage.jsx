import React from "react";
import { LoginSignup } from "../components/login/LoginSignup";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";

export const LoginPage = (location) => {
  return (
    <>
      <Navbar />

      {location === "/signup" && <Sidebar />}

      <LoginSignup />
    </>
  );
};
