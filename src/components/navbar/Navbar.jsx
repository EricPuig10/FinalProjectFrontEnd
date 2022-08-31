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
        {localAuthService.isLogged ? (
          <Link to="/login">
            <LogInButton>LogIn</LogInButton>
          </Link>
        ) : (
          <LogInButton onClick={logout}>LogOut</LogInButton>
        )}
      </DivButton>
    </DivNav>
  );
}

export default Navbar;
