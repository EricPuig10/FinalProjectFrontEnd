import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { BasicInfoDiv, DetailDiv } from '../detail/Detail.styled'

// const theme = createTheme({
//     palette: {
//       primary: {
//         light: '#ef875e',
//         main: '#ef875e',
//         dark: '#ea561d',
//         contrastText: '#fff',
//       },
//       secondary: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//   });
  
//   import { createTheme } from '@mui/material'
//   import { createTheme } from '@material-ui/core/styles';

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
      value: 'Backend',
      label: 'Back-End'
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

function ProfileBootcamp(props) {

    const [bootcamps, setBootcamps] = useState({ initialBootcamp });
    
      const handleChange = (event) => {
        setBootcamps({
          ...bootcamps,
          [event.target.name]: event.target.value
        });
      };
    


  return (
    <DetailDiv>
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
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
              md={3}
              xs={6}
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
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
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
              md={6}
              xs={12}
            >
            <TextField
                fullWidth
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
                label="Fecha de inicio"
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
                label="Fecha de finalización"
                name="finalDate"
                onChange={handleChange}
                type="date"
                value={bootcamps.finalDate}
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
          <Button
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
    </DetailDiv>
  )
}

export default ProfileBootcamp