import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import { CtButton, CtLogo, CtSidebar, Icon, Logo } from "./Sidebar.styled";

export const Sidebar = () => {
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
          <Icon>
            <i className="fa-solid fa-house fa-xl"></i>
          </Icon>
          {/* <Txt>Home</Txt> */}
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/candidats">
          <Icon>
            <i className="fa-solid fa-user fa-xl"></i>
          </Icon>
          {/* <Txt>Candidats</Txt> */}
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/bootcamps">
          <Icon>
            <i className="fa-solid fa-laptop-code fa-xl"></i>
          </Icon>
          {/* <Txt>Bootcamp</Txt> */}
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/process">
          <Icon>
          <i className="fa-sharp fa-solid fa-ranking-star fa-xl"></i>
          </Icon>
          {/* <Txt>Bootcamp</Txt> */}
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/">
          <Icon>
            <i className="fa-solid fa-gear fa-xl"></i>
          </Icon>
          {/* <Txt>Settings</Txt> */}
        </Link>
      </CtButton>

      <CtButton>
        {localAuthService.isLogged() ? (
          <Icon onClick={logout}>
            <i className="fa-solid fa-arrow-right-from-bracket fa-xl"></i>
          </Icon>
        ) : null}
        {/* <Txt>LogOut</Txt> */}
      </CtButton>
    </CtSidebar>
  );
};

export default Sidebar;
