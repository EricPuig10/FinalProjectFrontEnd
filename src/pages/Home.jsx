import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import List from "../components/List/List";

export const Home = () => {
  return (
  <>
 <Navbar />
  <div>
    <Sidebar/>
    <List/>
  </div>
  
  </>
  )
}
