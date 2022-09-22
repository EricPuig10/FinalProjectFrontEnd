import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { DataTable } from "../components/tablematerial/DataTable";

export const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <DataTable />
      </div>
    </>
  );
};
