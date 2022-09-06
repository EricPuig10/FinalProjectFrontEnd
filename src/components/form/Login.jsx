import React, { useState } from "react";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import {
  BtLogin,
  CtButton,
  CtForm,
  CtInput,
  Form,
  Label,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  const onInputChange = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const signin = () => {
    authService.signin(userData).then((res) => {
      console.log(userData);
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

  return (
    <CtForm>
      <Form>
        <Label htmlFor="title">
          <CtInput
            type="text"
            name="username"
            placeholder="user name"
            value={userData.username}
            onChange={onInputChange}
          />
        </Label>

        <Label htmlFor="password">
          <CtInput
            type="password"
            name="password"
            placeholder="user password"
            value={userData.password}
            onChange={onInputChange}
          />
        </Label>

        <CtButton>
          <BtLogin type="button" id="login" onClick={signin}>
            LOG IN
          </BtLogin>
        </CtButton>
      </Form>
    </CtForm>
  );
};
