import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import { DivButton, DivLogo, DivNav, LogInButton, Logo } from "./Navbar.styled";

function Navbar() {
  const logout = () => {
    authService.logout();
  };

  return (
    <DivNav>
      <DivLogo>
        <Logo src="https://www.rompemosloscodigos.org/wp-content/uploads/2020/06/logo-factoria-F5.png"></Logo>
      </DivLogo>
      <DivButton>
        {localAuthService.isLogged() ? (
          <LogInButton onClick={logout}>LogOut</LogInButton>
        ) : (
          <Link to="/login">
            <LogInButton>Log In</LogInButton>
          </Link>
        )}
      </DivButton>
    </DivNav>
  );
}

export default Navbar;
