import React from "react";
import Navbar from "../components/navbar/Navbar";
import ProfileBootcamp from "../components/profile/ProfileBootcamp";
import { Sidebar } from "../components/sidebar/Sidebar";

function ProfileBootcampPage() {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <ProfileBootcamp />
    </>
  );
}

export default ProfileBootcampPage;
