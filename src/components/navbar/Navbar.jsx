import React from "react";
import { useLocation } from "react-router-dom";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import { DivButton, DivLogo, DivNav, LogInButton, Logo } from "./Navbar.styled";

function Navbar() {
  const logout = () => {
    authService.logout();
  };
 const location = useLocation();

  return (
    <DivNav>
      <DivLogo>
        <Logo>{location.pathname}</Logo>
      </DivLogo>
      <DivButton>
        {localAuthService.isLogged() ? (
          <LogInButton onClick={logout}>LogOut</LogInButton>
        ) : (
          null
        )}
      </DivButton>
    </DivNav>
  );
}

export default Navbar;
