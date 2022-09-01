import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

function DashboardPage() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default DashboardPage;
