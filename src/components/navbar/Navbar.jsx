import React from "react";
import { useLocation } from "react-router-dom";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import { DivButton, DivLogo, DivNav, LogInButton, Logo } from "./Navbar.styled";

export const Navbar = () => {
  const logout = () => {
    authService.logout();
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(1).toUpperCase() + string.slice(2);
  }

  const location = useLocation();
  const title = capitalizeFirstLetter(location.pathname);

  return (
    <DivNav>
      <DivLogo>
        <Logo>{title.split("/")}</Logo>
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
