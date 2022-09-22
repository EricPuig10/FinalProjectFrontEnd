import React from "react";
import { Profile } from "../components/profile/Profile";
import { Navbar } from "../components/navbar/Navbar";

import { Sidebar } from "../components/sidebar/Sidebar";

export const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <Profile />
    </>
  );
};
