import {
  Alert,
  Button,
  CardContent,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgUser from "../../assets/img/imgUser.png";
import imgAdmin from "../../assets/img/imgAdmin.png";
import { authService } from "../../services/authService";
import { localAuthService } from "../../services/localAuthService";
import { CtButton, CtForm, CtImg, Img, PopUp } from "./Login.styled";

export const LoginSignup = () => {
  const [msg, setMsg] = useState();
  const [errormsg, setErrorMsg] = useState();
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
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

  const alertError = (errormsg) => {
    setErrorMsg(errormsg);
    setTimeout(function () {
      setErrorMsg(undefined);
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

      if (res.error) {
        alertError(res.error);
        console.log(res.error);
        redireccionarLoginWithTimeout();
        return;
      }

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
      if (res.error) {
        alertError(res.error);
        console.log(res.error);
        redireccionarWithTimeout();
        return;
      }
      alertUp(res.message);
      console.log(res.message);
      setTimeout(redireccionar(), 5000);

      // href={!error ? "/signup" : messageMail}

      // setMsg(res.message)
      // if(res) window.alert("Nuevo usuario registrado con ??xito");
    });
  };

  const redireccionar = () => {
    window.location.href = messageMail;
  };

  const redireccionarLogin = () => {
    window.location.href = "/login";
  };

  const redireccionarSignUp = () => {
    window.location.href = "/signup";
  };

  const redireccionarWithTimeout = () => {
    setTimeout(function () {
      redireccionarSignUp();
    }, 2000);
  };

  const redireccionarLoginWithTimeout = () => {
    setTimeout(function () {
      redireccionarLogin();
    }, 2000);
  };

  const messageMail = `mailto:${userData.email}?Subject=Ya est??s registrado en nuestra app de gesti??n de candidatos&body=Tu nombre de usuario es ${userData.username}. Este es tu email: ${userData.email} y tu contrase??a: ${userData.password} para que puedas iniciar sesi??n en tu cuenta http://localhost:3000/signin`;
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

      <PopUp>
        {errormsg !== undefined ? (
          <Alert
            severity="success"
            errormsg={errormsg}
            color="primary"
            sx={{ border: 1, borderColor: "primary.main" }}
          >
            {errormsg}
          </Alert>
        ) : null}
      </PopUp>

      <Divider orientation="vertical" />
      <CtForm>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre de usuario"
                name="username"
                placeholder="Nombre de usuario"
                value={userData.username}
                onChange={onInputChange}
                required
                variant="outlined"
                // style={{ margin: 8 }}
              />
            </Grid>

            {location === "/signup" && (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    aria-label="email"
                    required
                    type="email"
                    value={userData.email}
                    onChange={onInputChange}
                    variant="outlined"
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <TextField
                fullWidth
                type={shown ? "text" : "password"}
                label="Contrase??a"
                required
                name="password"
                placeholder="password"
                value={userData.password}
                onChange={onInputChange}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        type="button"
                        aria-label="toggle password visibility"
                        onClick={switchShown}
                      >
                        {shown ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
          </Grid>
          <></>
          <CtButton>
            <Grid item xs={12}>
              {location === "/login" ? (
                <Button
                  type="button"
                  variant="contained"
                  id="login"
                  onClick={signin}
                  // style={{ margin: 8 }}
                >
                  LOG IN
                </Button>
              ) : (
                <Button
                  type="button"
                  variant="contained"
                  id="signup"
                  onClick={signup}
                  endIcon={<ForwardToInboxIcon />}
                  style={{ padding: 8 }}
                  // href={!error ? "/signup" : messageMail}
                  // si el mail est?? aqu??, l'envia tant si fa el registre com ni no
                >
                  REGISTRAR Y ENVIAR
                </Button>
              )}
            </Grid>
          </CtButton>
        </CardContent>
      </CtForm>
    </>
  );
};
