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
import { BasicInfoDiv, CtProfile } from "../profile/Profile.styled";
import { useLocation, useParams } from "react-router-dom";
import { bootcampsService } from "../../services/bootcampsService";
import { categoryService } from "../../services/categoryService";
import { CandidatsByBootcampTable } from "../tablematerial/CandidatsByBootcampTable";

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

  const location = useLocation();

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
    <>
      <CtProfile>
        <form autoComplete="off" noValidate onSubmit={onSubmitHandler}>
          <Card>
          {bootcamp.bootcampName === "" ? (
            <CardHeader
              subheader=""
              title="Crear un bootcamp"
            />
          ) : (
            <CardHeader
              subheader=""
              title={bootcamp.bootcampName}
            />
          )}

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
                      //label="Categoría"
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
      </CtProfile>
      {!isEditMode ? null : (
        <div
        // style={{
        //   height: 420,
        //   width: "100%",
        //   marginLeft: "0%",
        //   paddingLeft: "0%",
        //   marginTop: "1.5%",
        //   marginBottom: "1.5%",
        //   backgroundColor: "#ff0000",
        //   headerName: "#9d4848",
        // }}
        >
          <CandidatsByBootcampTable />
        </div>
      )}
    </>
  );
}

export default ProfileBootcamp;
