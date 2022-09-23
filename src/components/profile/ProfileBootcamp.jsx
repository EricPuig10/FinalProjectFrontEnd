import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  createFilterOptions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BasicInfoDiv,
  CloseBtnBootcamp,
  CtProfile,
  Modal,
} from "../profile/Profile.styled";
import { useNavigate, useParams } from "react-router-dom";
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

// eslint-disable-next-line
const filter = createFilterOptions();

function ProfileBootcamp() {
  const [bootcamp, setBootcamp] = useState(initialBootcamp);
  const [categories, setCategories] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [msg, setMsg] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { id } = useParams();
  const [category, setCategory] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    getBootcampById(id);
    getAllCategories();
    editMode();
    // eslint-disable-next-line
  }, []);

  const alertTimed = (msg) => {
    setMsg(msg);
    setTimeout(function () {
      setMsg(undefined);
    }, 2500);
  };

  const handleChange = (event) => {
    setBootcamp({
      ...bootcamp,
      [event.target.name]: event.target.value,
    });
  };

  // eslint-disable-next-line
  const changeCategory = (event) => {
    setCategory({
      ...category,
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

  const deleteBootcamp = (id) => {
    bootcampsService.deleteBootcamp(id).then((res) => {
      if (!res) return;
      if (res.error) {
        return;
      }
      navigate("/bootcamps");
    });
  };

  const updateBootcamp = (newBootcamp) => {
    bootcampsService.updateBootcamp(newBootcamp).then((res) => {
      if (!res) return;
      getBootcampById(id);
      alertTimed("Bootcamp actualizado!");
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reallyDelete = (text) => {
    handleClickOpen();
    setText(text);
  };

  // eslint-disable-next-line
  const addNewCategory = (data) => {
    categoryService.addCategory(data).then((res) => {
      setCategories(...categories, res)
    })
  };

  return (
    <>
      <CtProfile>
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
                <Button onClick={() => deleteBootcamp(id)} autoFocus>
                  Si
                </Button>
              </DialogActions>
            </Dialog>
          </Modal>
        ) : null}
        <form autoComplete="off" noValidate onSubmit={onSubmitHandler}>
          <Card>
            {bootcamp.bootcampName === "" ? (
              <CardHeader subheader="" title="Crear un bootcamp" />
            ) : (
              <CardHeader subheader="" title={bootcamp.bootcampName} />
            )}
            <CloseBtnBootcamp
              variant="contained"
              color="primary"
              type="button"
              onClick={() =>
                reallyDelete(
                  "Seguro que quieres eliminar " + bootcamp.bootcampName + " ?"
                )
              }
            >
              <i className="fa-regular fa-trash-can fa-xl"></i>
            </CloseBtnBootcamp>
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
                    <Autocomplete
                      value={bootcamp.category}
                      name="category"
                      onChange={(event, newValue) => {
                        if (typeof newValue === "string") {
                          changeCategory();
                        } else if (newValue && newValue.inputValue) {
                          // Create a new value from the user input
                          changeCategory();
                        } else {
                          changeCategory();
                        }
                      }}
                      filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        const { inputValue } = params;
                        // Suggest the creation of a new value
                        const isExisting = options.some(
                          (option) => inputValue === option
                        );
                        if (inputValue !== "" && !isExisting) {
                          addNewCategory(category);
                        }

                        return filtered;
                      }}
                      selectOnFocus
                      clearOnBlur
                      handleHomeEndKeys
                      id="free-solo-with-text-demo"
                      options={categories}
                      getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === "string") {
                          return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                          return option.inputValue;
                        }
                        // Regular option
                        return option;
                      }}
                      renderOption={(props, option) => (
                        <li {...props}>{option}</li>
                      )}
                      sx={{ width: 300 }}
                      freeSolo
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Free solo with text demo"
                        />
                      )}
                    />
                  </Grid> */}
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
