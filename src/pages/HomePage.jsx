import React from "react";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
    </>
  );
};
