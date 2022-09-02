import React from "react";
import { Home } from "../components/home/Home";
import Sidebar from "../components/sidebar/Sidebar";

export const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Home />
    </>
  );
};
