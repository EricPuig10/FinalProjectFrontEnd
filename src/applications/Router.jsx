import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import LoginPage from "../pages/LoginPage";

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}
