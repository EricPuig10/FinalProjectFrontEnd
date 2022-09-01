import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import { Button, CtButton, CtLogo, CtSidebar, Logo } from "./Sidebar.styled";

function Sidebar() {
  const logout = () => {
    authService.logout();
  };

  return (
    <CtSidebar>
      <CtLogo>
        <Logo src="https://www.rompemosloscodigos.org/wp-content/uploads/2020/06/logo-factoria-F5.png"></Logo>
      </CtLogo>

      <CtButton>
        <Link to="/">
          <Button>
            <i className="fa-solid fa-house fa-xl"></i> Home
          </Button>
        </Link>

        <Link to="/Candidats">
          <Button>
            <i className="fa-solid fa-user fa-xl"></i> Candidats
          </Button>
        </Link>
        <Link to="/Bootcamp">
          <Button>
            <i className="fa-solid fa-laptop-code fa-xl"></i> Bootcamp
          </Button>
        </Link>
        {/* <Link to="/Coders">
          <Button>Coders</Button>
          </Link> */}
        <Link to="/Settings">
          <Button>
            <i className="fa-solid fa-gear fa-xl"></i> Settings
          </Button>
        </Link>

        {localAuthService.isLogged() ? (
          <Button onClick={logout}>
            <i className="fa-solid fa-arrow-right-from-bracket fa-xl"></i>{" "}
            LogOut
          </Button>
        ) : null}
      </CtButton>
    </CtSidebar>
  );
}

export default Sidebar;
