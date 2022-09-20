import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgLogin from "../../assets/img/imgLogin.png";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import {
  BtLogin,
  CtButton,
  CtForm,
  CtImg,
  CtInput,
  Form,
  Img,
  Label,
} from "./Login.styled";

export const LoginSignup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const location = useLocation().pathname

  useEffect(() => {
  },[location])

  const onInputChange = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const signin = () => {
    authService.signin(userData).then((res) => {
      console.log(res);

      const authUser = {
        token: res.accessToken,
        username: res.username,
        id: res.id,
      };
      localStorage.setItem("auth_token", res.accessToken);
      localStorage.setItem("auth_user", res.username);
      localStorage.setItem("auth_id", res.id);
      localAuthService.saveAuthUser(authUser);
      navigate("/", { replace: true });
    });
  };

  // falta posar que si es registra que surti un avís de ok
  const signup = () => {
    authService.signup(userData).then((res) => {
      console.log(res);
    })
  }

  return (
    <>
      <CtImg>
        <Img src={imgLogin}></Img>
      </CtImg>

      <CtForm>
        <Form>
          <Label htmlFor="title">
            <CtInput
              type="text"
              name="username"
              placeholder="User name"
              value={userData.username}
              onChange={onInputChange}
            />
          </Label>

          {location==="/signup" &&
          <>
          <Label htmlFor="email" >
          <CtInput
          type="email"
          name="email"
          aria-label="email"
          placeholder="email"
          value={userData.email}
          onChange={onInputChange}
          />
          </Label>
          </>
          }

          <Label htmlFor="password">
            <CtInput
              type="password"
              name="password"
              placeholder="User password"
              value={userData.password}
              onChange={onInputChange}
            />
          </Label>

          <CtButton>
          
            {location==="/login" ?
            <BtLogin type="button" id="login" onClick={signin}>
              LOG IN
            </BtLogin> :
            <BtLogin type="button" id="signup" onClick={signup}>
              REGISTRAR NUEVO ADMINISTRADOR
            </BtLogin>
            }
          </CtButton>
        </Form>
      </CtForm>
    </>
  );
};
