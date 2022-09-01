import React from "react";
import { Home } from "../components/Home/Home";
import Sidebar from "../components/sidebar/Sidebar";

export const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Home />
    </>
  );
};
