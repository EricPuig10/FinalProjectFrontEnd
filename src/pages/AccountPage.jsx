import { width } from "@mui/system";
import React from "react";
import { AccountProfile } from "../components/account/account-profile";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { DetailDiv } from "../components/detail/Detail.styled";
import { Navbar } from "../components/navbar/Navbar";

import { Sidebar } from "../components/sidebar/Sidebar";

export const AccountPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
      </div>

      
        {/* <AccountProfile /> */}
        <AccountProfileDetails />
    </>
  );
};
