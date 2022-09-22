import { useEffect, useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { candidatsService } from "../../services/candidatsService";
import {
  BasicInfoDiv,
  ButtonUploadImg,
  DetailDiv,
  Modal,
} from "./Profile.styled";
import { bootcampsService } from "../../services/bootcampsService";
import { processService } from "../../services/processService";
import { CloseBtn, Input } from "../formCandidat/Form.styled";
import { cloudinaryService } from "../../services/imageService";
import imgCode from "../../assets/img/codeacademy.png";
import sololearn from "../../assets/img/sololearn.webp";
import gmail from "../../assets/img/gmail.png";

const initialCandidat = {
  id: "",
  name: "",
  lastname: "",
  secondlastname: "",
  email: "",
  phone: "",
  age: "",
  degree: "",
  date: "",
  superpower: "",
  direction: "",
  english: "",
  formation: "",
  reached: "",
  spirit: "",
  motivation: "",
  gender: "Otro",
  nationality: "",
  laboralsituation: "",
  bootcamp: "Osona",
  processState: "First process",
  sololearnprogress: "",
  codeacademyprogress: "",
  assistedtoinformativesession: "",
  img: "",
  document: "NIF",
  numberdocument: "",
  location: "",
};

const genders = ["Masculino", "Femenino", "NB", "Otro"];

const documents = ["NIF", "NIE", "Pasaporte"];

export const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [candidat, setCandidat] = useState(initialCandidat);
  //eslint-disable-next-line
  const [candidatObjects, setCandidatObjects] = useState([]);
  const [bootcamps, setBootcamps] = useState([]);
  const [process, setProcess] = useState([]);
  const [msg, setMsg] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getById(id);
    getAllBootcamps();
    getAllProcess();
    editMode();
  }, []);

  const alertTimed = (msg) => {
    setMsg(msg);
    setTimeout(function () {
      setMsg(undefined);
    }, 2500);
  };

  const getById = (id) => {
    if (!id) return;
    candidatsService.getCandidatById(id).then((res) => {
      setCandidatObjects(res);
      setCandidat({
        ...res,
        bootcamp: res.bootcamp.bootcampName,
        processState: res.processState.name,
      });
    });
  };

  const editMode = () => {
    if (!id) setIsEditMode(false);
    if (id) setIsEditMode(true);
  };

  const getAllBootcamps = () => {
    bootcampsService.getAllBootcamps().then((res) => {
      setBootcamps(res.map((bootcamp) => bootcamp.bootcampName));
    });
  };

  const getAllProcess = () => {
    processService.getAllProcess().then((res) => {
      setProcess(res.map((processState) => processState.name));
    });
  };

  const handleChange = (event) => {
    setCandidat({
      ...candidat,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (candidat.name.length > 0) {
      !isEditMode ? addNewCandidat(candidat) : updateCandidat(candidat);
    }

    resetInputsForm();
  };

  const resetInputsForm = (e) => {
    setCandidat(initialCandidat);
  };

  const addNewCandidat = (data) => {
    candidatsService.addCandidat(data).then((res) => {
      navigate("/candidats");
    });
  };

  const updateCandidat = (newCandidat) => {
    candidatsService.updateCandidat(newCandidat).then((res) => {
      if (!res) return;
      // setCandidat(res);
      getById(id);
      alertTimed("Candidato actualizado!");
    });
    getById(id);
  };

  const reallyDelete = (text) => {
    handleClickOpen();
    setText(text);
  };

  const deleteCandidat = (id) => {
    candidatsService.deleteCandidat(id).then((res) => {
      if (!res) return;
      if (res.error) {
        console.log(res.error);

        return;
      }
      navigate("/candidats");
    });
  };

  const onFileChangeHandler = (e) => {
    console.log(e.target.name, e.target.files[0]);
    let data = { ...candidat, file: e.target.files[0] };
    uploadImg(data);
  };

  const uploadImg = (data) => {
    let { file, ...inputsData } = data;
    console.log(inputsData);
    cloudinaryService.uploadImage(file).then((res) => {
      console.log(res);
      setCandidat({ ...inputsData, img: res.url });
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(candidat.date);

  let mailMessage = `mailto:${candidat.email}?Subject=Has sido seleccionado!`;

  return (
    <>
      <Modal>
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
      </Modal>
      {open !== false ? (
        <Modal>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Atención"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {text}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={() => deleteCandidat(id)} autoFocus>
                Si
              </Button>
            </DialogActions>
          </Dialog>
        </Modal>
      ) : null}
      <DetailDiv>
        <form
          autoComplete="off"
          encType="multipart/form-data"
          onSubmit={onSubmitHandler}
        >
          <Card>
            {candidat.name === "" ? (
              <CardHeader
                subheader="La información se puede editar"
                title="Perfil del candidato"
              />
            ) : (
              <CardHeader
                subheader="La información se puede editar"
                title={candidat.name + " " + candidat.lastname}
              />
            )}

            <CloseBtn
              variant="contained"
              color="primary"
              type="button"
              onClick={() =>
                reallyDelete(
                  "Seguro que quieres eliminar a " + candidat.name + " ?"
                )
              }
            >
              <i className="fa-regular fa-trash-can fa-xl"></i>
            </CloseBtn>
            <Divider />
            <BasicInfoDiv>
              <CardContent>
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    src={candidat.img}
                    sx={{
                      height: 200,
                      m: 2,
                      width: 200,
                      borderRadius: 0,
                    }}
                  />
                  <CardActions>
                    <Input
                      onChange={handleChange}
                      value={candidat.img}
                      aria-label="img"
                      name="img"
                      type="url"
                      placeholder="Paste img here..."
                      style={{ display: "none" }}
                    ></Input>
                    <ButtonUploadImg
                      htmlFor="file-upload"
                      className="custom-file-upload"
                    >
                      <i className="fa fa-cloud-upload"></i> Subir imagen
                    </ButtonUploadImg>
                    <input
                      onChange={onFileChangeHandler}
                      aria-label="img"
                      className="custom-file-upload"
                      name="img"
                      type="file"
                      id="file-upload"
                      accept="image/png, image/jpeg, image/gif"
                      placeholder="Search in your pc..."
                    ></input>
                    {/* <Button
                    color="primary"
                    fullWidth
                    variant="text"
                    sx={{ mb: 2 }}
                  >
                    Upload picture
                  </Button> */}
                  </CardActions>
                  <Grid item md={6} xs={12} mb={2}>
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="Nombre"
                      name="name"
                      onChange={handleChange}
                      required
                      value={candidat.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <TextField
                      fullWidth
                      label="Apellido"
                      name="lastname"
                      onChange={handleChange}
                      required
                      value={candidat.lastname}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <TextField
                      fullWidth
                      label="2º apellido"
                      name="secondlastname"
                      required
                      onChange={handleChange}
                      value={candidat.secondlastname}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <TextField
                      fullWidth
                      label="Documento"
                      name="document"
                      required
                      onChange={handleChange}
                      value={candidat.document}
                      variant="outlined"
                      select
                      SelectProps={{ native: true }}
                      sx={{ width: 210 }}
                    >
                      {documents.map((document, index) => (
                        <option key={index} value={document}>
                          {document}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={6} xs={12} mb={2}>
                    <TextField
                      label="Nº documento"
                      name="numberdocument"
                      type="text"
                      onChange={handleChange}
                      value={candidat.numberdocument}
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  {/* <Grid item md={6} xs={12} mb={2}>
                    <TextField
                      fullWidth
                      label="Edad"
                      name="age"
                      type="number"
                      onChange={handleChange}
                      value={candidat.age}
                      variant="outlined"
                    />
                  </Grid> */}
                </Box>
              </CardContent>

              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      onChange={handleChange}
                      required
                      type="email"
                      value={candidat.email}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <a href={mailMessage}>
                              <img
                                src={gmail}
                                style={{ width: 20, height: 18 }}
                                alt="sololearn"
                              />
                            </a>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Número de teléfono"
                      name="phone"
                      required
                      onChange={handleChange}
                      type="tel"
                      value={candidat.phone}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fa-solid fa-phone"></i>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="date"
                      type="date"
                      helperText="Indique la fecha de nacimiento"
                      onChange={handleChange}
                      value={candidat.date}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Comunidad Autónoma"
                      name="nationality"
                      onChange={handleChange}
                      required
                      value={candidat.nationality}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Población"
                      name="location"
                      type="text"
                      onChange={handleChange}
                      value={candidat.location}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Dirección"
                      name="direction"
                      onChange={handleChange}
                      value={candidat.direction}
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <i className="fa-solid fa-house"></i>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Género"
                      name="gender"
                      onChange={handleChange}
                      value={candidat.gender}
                      variant="outlined"
                      select
                      SelectProps={{ native: true }}
                    >
                      {genders.map((gender, index) => (
                        <option key={index} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Últimos estudios"
                      name="degree"
                      onChange={handleChange}
                      value={candidat.degree}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Superpoder"
                      name="superpower"
                      onChange={handleChange}
                      value={candidat.superpower}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Ha cursado otra formación?"
                      name="formation"
                      onChange={handleChange}
                      value={candidat.formation}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Cómo nos conoció?"
                      name="reached"
                      onChange={handleChange}
                      value={candidat.reached}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Situación laboral"
                      name="laboralsituation"
                      onChange={handleChange}
                      value={candidat.laboralsituation}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="SoloLearn"
                      name="sololearnprogress"
                      onChange={handleChange}
                      value={candidat.sololearnprogress}
                      variant="outlined"
                      type="url"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <a href={candidat.sololearnprogress}>
                              <img
                                src={sololearn}
                                style={{ width: 25, height: 25 }}
                                alt="sololearn"
                              />
                            </a>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="CodeAcademy"
                      name="codeacademyprogress"
                      onChange={handleChange}
                      value={candidat.codeacademyprogress}
                      type="url"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <a href={candidat.codeacademyprogress}>
                              <img
                                src={imgCode}
                                style={{ width: 25, height: 25 }}
                                alt="codeacademy"
                              />
                            </a>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      //label="Select bootcamp"
                      name="bootcamp"
                      onChange={handleChange}
                      select
                      SelectProps={{ native: true }}
                      value={candidat.bootcamp}
                      variant="outlined"
                    >
                      {bootcamps.map((bootcamp, index) => (
                        <option key={index} value={bootcamp}>
                          {bootcamp}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      //label="Select process"
                      name="processState"
                      onChange={handleChange}
                      select
                      SelectProps={{ native: true }}
                      value={candidat.processState}
                      variant="outlined"
                    >
                      {process.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Definición del espiritu hacker"
                      name="spirit"
                      onChange={handleChange}
                      value={candidat.spirit}
                      variant="outlined"
                      multiline
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Motivacion para formar parte del curso"
                      name="motivation"
                      onChange={handleChange}
                      value={candidat.motivation}
                      variant="outlined"
                      multiline
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </BasicInfoDiv>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Button type="submit" color="primary" variant="contained">
                Save details
              </Button>
            </Box>
          </Card>
        </form>
      </DetailDiv>
    </>
  );
};
