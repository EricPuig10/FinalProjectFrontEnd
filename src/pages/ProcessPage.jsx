import React from "react";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import ProcessTable from "../components/tablematerial/ProcessTable";

export const ProcessPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <ProcessTable />
    </>
  );
};

export default ProcessPage;
