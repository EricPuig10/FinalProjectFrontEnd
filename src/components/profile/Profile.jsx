import { useEffect, useState } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { candidatsService } from "../../services/candidatsService";
import { BasicInfoDiv, DetailDiv } from "./Profile.styled";
import { bootcampsService } from "../../services/bootcampsService";
import { processService } from "../../services/processService";
import { CloseBtn } from "../formCandidat/Form.styled";

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
  gender: "",
  nationality: "",
  laboralsituation: "",
  bootcamp: "",
  processState: "",
  sololearnprogress: "",
  codeacademyprogress: "",
  assistedtoinformativesession: "",
  img: "",
};

export const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [candidat, setCandidat] = useState(initialCandidat);
  //eslint-disable-next-line
  const [candidatObjects, setCandidatObjects] = useState([]);
  const [bootcamps, setBootcamps] = useState([]);
  const [process, setProcess] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getById(id);
    getAllBootcamps();
    getAllProcess();
    editMode();
  }, []);

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
    });
    getById(id);
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

  return (
    <DetailDiv>
      <form autoComplete="off" noValidate onSubmit={onSubmitHandler}>
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
            onClick={() => deleteCandidat(candidat.id)}
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
                  <Button
                    color="primary"
                    fullWidth
                    variant="text"
                    sx={{ mb: 2 }}
                  >
                    Upload picture
                  </Button>
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
                    onChange={handleChange}
                    value={candidat.secondlastname}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Edad"
                    name="age"
                    type="number"
                    onChange={handleChange}
                    value={candidat.age}
                    variant="outlined"
                  />
                </Grid>
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
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Número de teléfono"
                    name="phone"
                    onChange={handleChange}
                    type="tel"
                    value={candidat.phone}
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
                    label="Dirección"
                    name="direction"
                    onChange={handleChange}
                    value={candidat.direction}
                    variant="outlined"
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
                  />
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
  );
};
