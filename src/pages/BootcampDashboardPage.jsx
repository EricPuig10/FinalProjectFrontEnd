import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { BootcampTable } from "../components/tablematerial/BootcampTable";

export const BootcampDashboardPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
      </div>
        <BootcampTable />
    </>
  );
};

export default BootcampDashboardPage;
