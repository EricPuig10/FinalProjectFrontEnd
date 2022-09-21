import { Alert, Button, Dialog, DialogContent, DialogContentText, DialogTitle, EmailIcon ,InputAdornment, Modal } from "@mui/material";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
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
import gmail from "../../assets/img/gmail.png";
import axios from "axios";

export const LoginSignup = () => {
  const [msg, setMsg] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const location = useLocation().pathname;

  useEffect(() => {}, [location]);

  const alertTimed = (msg) => {
    setMsg(msg);
    setTimeout(function () {
      setMsg(undefined);
    }, 2500);
  };

  const resetInputsForm = (e) => {
    setUserData("");
  };

  const onInputChange = (e) => {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      window.location.href=`mailto:${userData.email}?Subject=Ya estás registrado en nuestra app de gestión de candidatos&body=Tu nombre de usuario es ${userData.username}, tu email ${userData.email} y la contraseña ${userData.password} para que puedas iniciar sesión en http://localhost:3000/login`;
      
      const signup = () => {
        authService.signup(userData).then((res) => {
          if(res) alertTimed("Nuevo usuario registrado con éxito");
        });
        resetInputsForm();
      };



    } catch (error) {
      
    }
  }

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
    // localAuthService.deleteAuthUser();
    authService.signup(userData).then((res) => {
      console.log(res);
      if(res) alertTimed("Nuevo usuario registrado con éxito");
    });
    // resetInputsForm();
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(userData)
  let mailMessage = `mailto:${userData.email}?Subject=Ya estás registrado en nuestra app de gestión de candidatos`+`&body=Este es tu email: ${userData.email} y tu contraseña: ${userData.password} para que puedas iniciar sesión en tu cuenta http://localhost:3000/signin`;

  return (
    <>
      <CtImg>
        <Img src={imgLogin}></Img>
      </CtImg>
      
      {/* <Modal>
        {msg !== undefined ? (
          <Alert severity="success" msg={msg} color="primary">
            {msg}
          </Alert>
        ) : null}
      </Modal>
      
      {open !== false ? (
        <Modal>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"El ususario ya está registrado"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {text}
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Modal>
      ) : null} */}
      
      <CtForm>
        <Form onSubmit={handleSubmit}>
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
                href={mailMessage}
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
