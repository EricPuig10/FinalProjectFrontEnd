import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import {
  CtButton,
  CtLogo,
  CtSidebar,
  Icon,
  Logo,
  Texthiden,
} from "./Sidebar.styled";

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
          <Texthiden>Home</Texthiden>
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/candidats">
          <Icon>
            <i className="fa-solid fa-user fa-xl"></i>
          </Icon>
          <Texthiden>Candidatos</Texthiden>
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/bootcamps">
          <Icon>
            <i className="fa-solid fa-laptop-code fa-xl"></i>
          </Icon>
          <Texthiden>Bootcamps</Texthiden>
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/process">
          <Icon>
            <i className="fa-sharp fa-solid fa-ranking-star fa-xl"></i>
          </Icon>
          <Texthiden>Procesos</Texthiden>
        </Link>
      </CtButton>

      <CtButton>
        <Link to="/settings">
          <Icon>
            <i className="fa-solid fa-gear fa-xl"></i>
          </Icon>
          <Texthiden>Config</Texthiden>
        </Link>
      </CtButton>

      <CtButton>
        {localAuthService.isLogged() ? (
          <Icon onClick={logout}>
            <i className="fa-solid fa-arrow-right-from-bracket fa-xl"></i>
          </Icon>
        ) : null}
        <Texthiden>Logout</Texthiden>
      </CtButton>
    </CtSidebar>
  );
};

export default Sidebar;
