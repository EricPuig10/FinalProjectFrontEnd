import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { BasicInfoDiv, DetailProfile } from "../profilemui/Profile.styled";
import { useNavigate, useParams } from "react-router-dom";
import { bootcampsService } from "../../services/bootcampsService";
import { categoryService } from "../../services/categoryService";

const initialBootcamp = {
  bootcampName: "",
  duration: "",
  category: "",
  characteristics: "",
  former: "",
  coformer: "",
  initialDate: "",
  finalDate: "",
  others: "",
};

function ProfileBootcamp() {
  const [bootcamp, setBootcamp] = useState(initialBootcamp);
  const [categories, setCategories] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const { id } = useParams();
  const theme = useTheme();

  let navigate = useNavigate();

  useEffect(() => {
    getBootcampById(id);
    getAllCategories();
    editMode();
  }, []);

  const handleChange = (event) => {
    setBootcamp({
      ...bootcamp,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (bootcamp.bootcampName.length > 0) {
      !isEditMode ? addNewBootcamp(bootcamp) : updateBootcamp(bootcamp);
    }
    resetInputsForm();
  };

  const resetInputsForm = () => {
    setBootcamp(initialBootcamp);
  };

  const editMode = () => {
    if (!id) setIsEditMode(false);
    if (id) setIsEditMode(true);
  };

  const addNewBootcamp = (data) => {
    bootcampsService.addBootcamp(data).then((res) => {
      navigate("/bootcamps");
    });
  };

  const updateBootcamp = (newBootcamp) => {
    bootcampsService.updateBootcamp(newBootcamp).then((res) => {
      if (!res) return;
      getBootcampById(id);
    });
    getBootcampById(id);
  };

  const getBootcampById = (id) => {
    if (!id) return;
    bootcampsService.getBootcampById(id).then((res) => {
      if (res) {
        setBootcamp({
          ...res,
          category: res.category.name,
        });
      }
    });
  };

  const getAllCategories = () => {
    categoryService.getAllCategories().then((res) => {
      setCategories(res.map((category) => category.name));
    });
  };

  return (
    <DetailProfile>
      <form autoComplete="off" noValidate onSubmit={onSubmitHandler}>
        <Card>
          <CardHeader subheader="" title="Datos del Bootcamp" />
          <Divider />
          <BasicInfoDiv>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    helperText="Especifique el nombre del Bootcamp"
                    label="Nombre del Bootcamp"
                    name="bootcampName"
                    onChange={handleChange}
                    required
                    value={bootcamp.bootcampName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    helperText="Introduzca la duración en horas"
                    label="Duración / horas"
                    name="duration"
                    onChange={handleChange}
                    required
                    type="number"
                    value={bootcamp.duration}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    helperText="Escoja el tipo de bootcamp"
                    label="Categoría"
                    name="category"
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={bootcamp.category}
                    variant="outlined"
                  >
                    {categories.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </TextField>
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    helperText="Introduzca el formador"
                    label="Formador"
                    name="former"
                    onChange={handleChange}
                    required
                    value={bootcamp.former}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    helperText="Introduzca el coformador"
                    label="Co-formador"
                    name="coformer"
                    onChange={handleChange}
                    required
                    value={bootcamp.coformer}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    // label="Fecha de inicio"
                    helperText="Indique la fecha de inicio"
                    name="initialDate"
                    onChange={handleChange}
                    type="date"
                    value={bootcamp.initialDate}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    // label="Fecha de finalización"
                    helperText="Indique la fecha de finalización"
                    name="finalDate"
                    onChange={handleChange}
                    type="date"
                    value={bootcamp.finalDate}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Características"
                    helperText="Características del bootcamp"
                    name="characteristics"
                    onChange={handleChange}
                    required
                    value={bootcamp.characteristics}
                    variant="outlined"
                  />
                </Grid>
                {/* <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label="Comentarios"
                    helperText="Comentarios y otros datos de interés"
                    name="others"
                    onChange={handleChange}
                    type="text"
                    value={bootcamp.others}
                    variant="outlined"
                  />
                </Grid> */}
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
              Guardar
            </Button>
          </Box>
        </Card>
      </form>
    </DetailProfile>
  );
}

export default ProfileBootcamp;
