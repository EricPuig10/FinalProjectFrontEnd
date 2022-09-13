import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import { sizing } from '@mui/system';
import React, { useState } from 'react'

import { BasicInfoDiv, DetailProfile, CtProfile } from '../profilemui/Profile.styled'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
    main: '#ea561d',
    }
  },
});

const categories = [
    {
      value: 'fullstack',
      label: 'Full-Stack'
    },
    {
      value: 'Frontend',
      label: 'Front-End'
    },
    {
      value: 'Blockchain',
      label: 'Block-Chain'
    },
    {
      value: 'AI',
      label: 'Artifitial Inteligence'
    }
  ];

const initialBootcamp = {
    bootcampName: "",
    duration: "",
    category: "",
    characteristics: "",
    former: "",
    coformer: "",
    initialDate: "",
    finalDate: "",
}

function ProfileBootcamp(props, updateBootcamp) {

    const [bootcamps, setBootcamps] = useState({ initialBootcamp });
    const [isEditMode, setIsEditMode] = useState(false);

    const handleChange = (event) => {
      setBootcamps({
        ...bootcamps,
        [event.target.name]: event.target.value
      });
    };
    
    const onSubmitHandler = (e) => {
      e.preventDefault();

      if (bootcamps.bootcampName.length > 0) {
        !isEditMode
        ? props.addNewBootcamp(bootcamps)
        : props.updateBootcamp(bootcamps);
      }
      resetInputsForm();
    }

    const resetInputsForm = () => {
      setBootcamps(initialBootcamp)
    };



  return (
    <CtProfile>
    <DetailProfile>
    <form
      autoComplete="off"
      noValidate
      {...props}
      onSubmit={onSubmitHandler}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Datos del Bootcamp"
        />
        <Divider />
        <BasicInfoDiv>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Especifique el nombre del Bootcamp"
                label="Nombre del Bootcamp"
                name="boocampName"
                onChange={handleChange}
                required
                value={bootcamps.bootcampName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Introduzca la duración en horas"
                label="Duración / horas"
                name="duration"
                onChange={handleChange}
                required
                value={bootcamps.duration}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
            <TextField
                fullWidth
                helperText="Escoja el tipo de bootcamp"
                label="Categoría"
                name="category"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={bootcamps.category}
                variant="outlined"
              >
                {categories.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>

            </Grid>
            
            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Introduzca el formador"
                label="Formador"
                name="former"
                onChange={handleChange}
                required
                value={bootcamps.former}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Introduzca el coformador"
                label="Co-formador"
                name="coformer"
                onChange={handleChange}
                required
                value={bootcamps.coformer}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                // label="Fecha de inicio"
                helperText="Indique la fecha de inicio"
                name="initialDate"
                onChange={handleChange}
                type="date"
                value={bootcamps.initialDate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                // label="Fecha de finalización"
                helperText="Indique la fecha de finalización"
                name="finalDate"
                onChange={handleChange}
                type="date"
                value={bootcamps.finalDate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Características"
                helperText="Características del bootcamp"
                name="characteristics"
                onChange={handleChange}
                required
                value={bootcamps.others}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Comentarios"
                helperText="Comentarios y otros datos de interés"
                name="others"
                onChange={handleChange}
                type="text"
                value={bootcamps.others}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        </BasicInfoDiv>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <ThemeProvider theme={theme}>
          <Button
            color="primary"
            variant="contained"
            // onClick={updateBootcamp()}
          >
            Guardar
          </Button>
          </ThemeProvider>

        </Box>
      </Card>
    </form>
    </DetailProfile>
    </CtProfile>
  )
}

export default ProfileBootcamp