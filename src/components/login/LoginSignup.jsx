import { Alert, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Modal } from "@mui/material";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgUser from "../../assets/img/imgUser.png";
import imgAdmin from "../../assets/img/imgAdmin.png";

import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import {
  BtEye,
  BtLogin,
  CtButton,
  CtForm,
  CtImg,
  CtInput,
  CtInputPassword,
  Form,
  Img,
  Label,
  LabelPassword,
  PopUp,
} from "./Login.styled";

export const LoginSignup = () => {
  
  const [msg, setMsg] = useState();
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {}, [location]);

  const alertUp = (msg) => {
    setMsg(msg);
    setTimeout(function () {
      setMsg(undefined);
    }, 10000);
  };

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
      // resetInputsForm();
    });
  };

  const signup = () => {
    authService.signup(userData).then((res) => {
      console.log(res);
      alertUp(res.message)
      resetInputsForm();
      // setMsg(res.message)
      // if(res) window.alert("Nuevo usuario registrado con éxito");
    });
  };

  // console.log(userData)
  let mailMessage = `mailto:${userData.email}?Subject=Ya estás registrado en nuestra app de gestión de candidatos&body=Tu nombre de usuario es ${userData.username}. Este es tu email: ${userData.email} y tu contraseña: ${userData.password} para que puedas iniciar sesión en tu cuenta http://localhost:3000/signin`;
  
  const resetInputsForm = () => {
    setUserData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>

     {location === "/signup" ? (
            <>
      <CtImg>
        <Img src={imgUser}></Img>
      </CtImg>
      </>
        ) : (
        <>
      <CtImg>
        <Img src={imgAdmin}></Img>
      </CtImg>
      </>
        )}

      <PopUp>
        {msg !== undefined ? (
          <Alert severity="success" msg={msg} color="primary" sx={{ border: 1, borderColor: "primary.main" }}>
            {msg}
          </Alert>
        ) : null}
      </PopUp>

      <CtForm>
        <Form>
          <Label htmlFor="title">
            <CtInput
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={userData.username}
              onChange={onInputChange}
            />
          </Label>

          {location === "/signup" && (
            <>
              <Label htmlFor="email">
                <CtInput
                  type="email"
                  name="email"
                  aria-label="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={onInputChange}
                />
              </Label>
            </>
          )}
          <LabelPassword htmlFor="password">
            <CtInputPassword
              type={shown ? 'text' : 'password'}
              name="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={onInputChange}
            />
            <BtEye onClick={switchShown}>
            {shown ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
            </BtEye>
          </LabelPassword>
          
          <CtButton>
            {location === "/login" ? (
              <BtLogin type="button" id="login" onClick={signin}>
                LOG IN
              </BtLogin>
            ) : (
              <Button 
                type="button" 
                id="signup" 
                onClick={signup}
                endIcon={<ForwardToInboxIcon />}
                href={mailMessage} // si el mail està aquí, l'envia tant si fa el registre com i no
                >
                REGISTRAR Y ENVIAR
              </Button>
            )}
          </CtButton>
        </Form>
      </CtForm>
    </>
  );
};
