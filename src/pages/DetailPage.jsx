import React from "react";
import { Detail } from "../components/detail/Detail";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";

export const DetailPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <Detail />
      </div>
    </>
  );
}
