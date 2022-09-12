import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { candidatsService } from "../../services/candidatsService";
import { BasicInfoDiv } from "../detail/Detail.styled";
import { bootcampsService } from "../../services/bootcampsService";



const process = [
  {
    value: "First process",
    label: "First process",
  },
  {
    value: "Second process",
    label: "Second process",
  },
  {
    value: "Third process",
    label: "Third process",
  },
];

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

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: "Katarina",
    lastName: "Smith",
    email: "demo@devias.io",
    phone: "",
    state: "Alabama",
    country: "USA",
  });
  const [candidat, setCandidat] = useState(initialCandidat);
  const [bootcamps, setBootcamps] = useState([{
    bootcampName: "",
    category: { id: "", name: "" },
    characteristics: "",
    duration: "",
    id: "",
  }]);

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getById(id);
    getAllBootcamps();
  }, []);

  const getById = (id) => {
    candidatsService.getCandidatById(id).then((res) => {
      setCandidat(res);
    });
  };

  const getAllBootcamps = () => {
    bootcampsService.getAllBootcamps().then((res) => {
        console.log(res)
      setBootcamps(res);
    });
  };

  const updateCandidat = (newCandidat) => {
    candidatsService.updateCandidat(newCandidat).then((res) => {
      if (!res) return;
      setCandidat();
      getById(id);
    });
    getById(id);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setCandidat({
      ...candidat,
      [event.target.name]: event.target.value,
    });
    console.log(candidat);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    updateCandidat(candidat);
  };

  return (
    <form autoComplete="off" noValidate {...props} onSubmit={onSubmitHandler}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
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
                  type="number"
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
                  label="Select bootcamp"
                  name="bootcamp"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={candidat.bootcamp}
                  variant="outlined"
                >
                  {bootcamps.map((bootcamp) => (
                    <option key={bootcamp.id} value={bootcamp.bootcampName}>
                      {bootcamp.bootcampName}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.process}
                  variant="outlined"
                >
                  {process.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
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
  );
};
