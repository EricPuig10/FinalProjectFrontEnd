import React, { useEffect, useState } from "react";
import { authService } from "../../services/authService";
import  img  from '../../assets/img/img_grande.png';
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

  // const logout = () =>{
  //   authService.logout();
  // }

  // useEffect(() => {
  //   logout();
  // }, []);
  return (
    <>

    <CtImg>
      <Img src={img}></Img>
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
          <BtLogin type="button" id="login" onClick={signin}>
            LOG IN
          </BtLogin>
        </CtButton>
      </Form>
    </CtForm>
    </>
  );
};
