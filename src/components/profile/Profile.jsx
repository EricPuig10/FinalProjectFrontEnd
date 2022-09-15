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
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
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
                    label="First name"
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
                    label="Last name"
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
                    label="2n Last Name"
                    name="secondlastname"
                    onChange={handleChange}
                    value={candidat.secondlastname}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Age"
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
                    label="Email Address"
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
                    label="Phone Number"
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
                    label="Country"
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
                    label="Direction"
                    name="direction"
                    onChange={handleChange}
                    value={candidat.direction}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Gender"
                    name="gender"
                    onChange={handleChange}
                    value={candidat.gender}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Degree"
                    name="degree"
                    onChange={handleChange}
                    value={candidat.degree}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Superpower"
                    name="superpower"
                    onChange={handleChange}
                    value={candidat.superpower}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Formation"
                    name="formation"
                    onChange={handleChange}
                    value={candidat.formation}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Reached"
                    name="reached"
                    onChange={handleChange}
                    value={candidat.reached}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Laboral situation"
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
                    label="Spirit"
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
                    label="Motivation"
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
