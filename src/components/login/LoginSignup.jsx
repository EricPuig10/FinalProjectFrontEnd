import {
  Alert,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from "@mui/material";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
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
  PopUp,
} from "./Login.styled";

export const LoginSignup = () => {
  const [msg, setMsg] = useState();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const location = useLocation().pathname;

  useEffect(() => {}, [location]);

  // const resetInputsForm = (e) => {
  //   setUserData("");
  // };

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
    });
  };

  const signup = () => {
    authService.signup(userData).then((res) => {
      console.log(res);
      if (res.error) {
        alertUp(res.error);        
      }
      setError(true);
      alertUp(res.message);

      // setMsg(res.message)
      // if(res) window.alert("Nuevo usuario registrado con éxito");
    });
    // resetInputsForm(); si buidem el formulari no se'ns carreguen les dades per l'e-mail
  };

  // console.log(userData)
  const [error, setError] = useState(false);

  const messageMail = `mailto:${userData.email}?Subject=Ya estás registrado en nuestra app de gestión de candidatos&body=Tu nombre de usuario es ${userData.username}. Este es tu email: ${userData.email} y tu contraseña: ${userData.password} para que puedas iniciar sesión en tu cuenta http://localhost:3000/signin`;
  return (
    <>
      <CtImg>
        <Img src={imgLogin}></Img>
      </CtImg>

      <PopUp>
        {msg !== undefined ? (
          <Alert
            severity="success"
            msg={msg}
            color="primary"
            sx={{ border: 1, borderColor: "primary.main" }}
          >
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
                  placeholder="email"
                  value={userData.email}
                  onChange={onInputChange}
                />
              </Label>
            </>
          )}

          <Label htmlFor="password">
            <CtInput
              type="password"
              name="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={onInputChange}
            />
          </Label>

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
                href={!error ? "/signup" : messageMail}
                // si el mail està aquí, l'envia tant si fa el registre com ni no
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
