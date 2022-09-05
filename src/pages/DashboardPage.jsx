import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import EnhancedTable from "../components/tablematerial/DataTable";

function DashboardPage() {
  return (
    <>
    <Navbar/>
      <div
        // style={{
        //   height: "100vh",
        //   width: "100vw",
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "flex-start",
        //   alignItems: "center",
        // }}
      >
        <Sidebar />
        <EnhancedTable></EnhancedTable>
      </div>
    </>
  );
}

export default DashboardPage;
