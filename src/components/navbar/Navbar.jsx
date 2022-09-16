import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { authService } from "../../services/authService";
import { bootcampsService } from "../../services/bootcampsService";
import { localAuthService } from "../../services/localAuthService";
import { DivButton, DivLogo, DivNav, LogInButton, Logo } from "./Navbar.styled";

export const Navbar = () => {
  const [bootcamp, setBootcamp] = useState([]);

  const { id } = useParams();

  const logout = () => {
    authService.logout();
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(1).toUpperCase() + string.slice(2);
  }

  const location = useLocation();
  const title = capitalizeFirstLetter(location.pathname);

  const getBootcampById = (id) => {
    if (!id) return;
    bootcampsService.getBootcampById(id).then((res) => {
      if (res) {
        setBootcamp({
          ...res,
          category: res.category.name,
        });
      }
    });
  };

  useEffect(() => {
    getBootcampById(id);
  }, []);

  return (
    <DivNav>
      <DivLogo>
        <Logo>{title.split("/1")}</Logo>
      </DivLogo>
      <DivButton>
        {localAuthService.isLogged() ? (
          <LogInButton onClick={logout}>LogOut</LogInButton>
        ) : null}
      </DivButton>
    </DivNav>
  );
};

export default Navbar;
