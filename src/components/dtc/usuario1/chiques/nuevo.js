import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import servicioDtc from '../../../../services/dtc'
import NativeSelect from '@mui/material/NativeSelect';
import Tooltip from '@material-ui/core/Tooltip';
import { Paper, CircularProgress, Typography, Card, CardActions } from '@mui/material';
import React, { useEffect, useState, Fragment } from "react";
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';


const StyledParagraph = styled.p`
  font-family: 'Montserrat', sans-serif;
`;

export default function SelectTextFields(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [form, setForm] = useState({
    fecha_nacimiento:"Sin determinar",
    observaciones:"Sin determinar",
    primer_contacto:"Sin determinar",
    primer_ingreso:"Sin determinar",
    admision:"Sin determinar",
    
    dni:"Sin determinar",
    domicilio:"Sin determinar",
    telefono:"Sin determinar",
    autorizacion_imagen:"Sin determinar",
    fotoc_dni:"Sin determinar",
    fotoc_responsable:"Sin determinar",
    tel_responsable:"Sin determinar",
    visita_social:"Sin determinar",
    egreso:"Sin determinar",
    aut_retirar:"Sin determinar",
    dato_escolar:"Sin determinar",
    hora_merienda:"Sin determinar",
  })
  const [datos, setDatos] = useState()
  const [activo, setActivo] = useState(false)







  const handleChange = (e) => {
    console.log(form)
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  const handleClickOpen = () => {

    setOpen(true);


  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeterminar = async (event) => {

    try {
      event.preventDefault();

      const nov = await servicioDtc.nuevochique(form)

    } catch (error) {
      console.error(error);
      console.log('Error algo sucedio')


    }

    props.traer()

    setOpen(false);
  };

  const [currency, setCurrency] = React.useState('EUR');

  /*   const handleChange = (event) => {
      setCurrency(event.target.value);
    }; */


  return (




    <Box

      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      < Tooltip title="Nueva Clase">
        <Button variant="outlined" onClick={handleClickOpen}> Nuevo  </Button>

      </Tooltip>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

        
            <h3>
              <b> NUEVO CHIQUE</b></h3>

              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              name="nombre"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />

<TextField
              autoFocus
              margin="dense"
              id="name"
              
              label="Apellido"
              name="apellido"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="dni"
              
              label="DNI"
              name="dni"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <br/>
            <TextField

              onChange={handleChange}
              name="fecha_nacimiento"
              id="date"
              label="Fecha de nacimiento"
              type="date"
              defaultValue="2023-03-01"
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
              <TextField

onChange={handleChange}
name="primer_contacto"
id="date"
label="primer_contacto"
type="date"
defaultValue="2023-03-01"
sx={{ width: 220 }}
InputLabelProps={{
  shrink: true,
}}
/>
<TextField

onChange={handleChange}
name="primer_ingreso"
id="date"
label="primer_ingreso"
type="date"
defaultValue="2023-03-01"
sx={{ width: 220 }}
InputLabelProps={{
  shrink: true,
}}
/>
<TextField

onChange={handleChange}
name="admision"
id="date"
label="admision"
type="date"
defaultValue="2023-03-01"
sx={{ width: 220 }}
InputLabelProps={{
  shrink: true,
}}
/>
<InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    <StyledParagraph>
                                        ¿Autorizacion de imagen?
                                    </StyledParagraph>
                                </Typography>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'autorizacion_imagen',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                                <option value={'Sin determinar'} >Elegir</option>
                                <option value={'Si'}>
                                    <Typography variant="body1" component="div" color="black" fontFamily="Montserrat" >
                                        Si
                                    </Typography>
                                </option>
                                <option value={'No'}>No</option>

                            </NativeSelect>
                            <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    <StyledParagraph>
                                        ¿Fotocopia de DNI?
                                    </StyledParagraph>
                                </Typography>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'fotoc_dni',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                                <option value={'Sin determinar'} >Elegir</option>
                                <option value={'Si'}>
                                    <Typography variant="body1" component="div" color="black" fontFamily="Montserrat" >
                                        Si
                                    </Typography>
                                </option>
                                <option value={'No'}>No</option>

                            </NativeSelect>
                            <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    <StyledParagraph>
                                        ¿Fotocopia DNI Responsable?
                                    </StyledParagraph>
                                </Typography>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'fotoc_responsable',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                                <option value={'Sin determinar'} >Elegir</option>
                                <option value={'Si'}>
                                    <Typography variant="body1" component="div" color="black" fontFamily="Montserrat" >
                                        Si
                                    </Typography>
                                </option>
                                <option value={'No'}>No</option>

                            </NativeSelect>


                            <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    <StyledParagraph>
                                        ¿Visita social?
                                    </StyledParagraph>
                                </Typography>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'visita_social',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                                <option value={'Sin determinar'} >Elegir</option>
                                <option value={'Si'}>
                                    <Typography variant="body1" component="div" color="black" fontFamily="Montserrat" >
                                        Si
                                    </Typography>
                                </option>
                                <option value={'No'}>No</option>

                            </NativeSelect>




                            <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    <StyledParagraph>
                                        ¿Egreso del DTC
                                    </StyledParagraph>
                                </Typography>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'egreso',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                                <option value={'Sin determinar'} >Elegir</option>
                                <option value={'Solo'}>
                                    <Typography variant="body1" component="div" color="black" fontFamily="Montserrat" >
                                       Solo
                                    </Typography>
                                </option>
                                <option value={'Con acompaniante'}>Con acompañante</option>

                            </NativeSelect>


                            
                            <InputLabel variant="outlined" htmlFor="uncontrolled-native">
                                <Typography variant="p" component="div" color="black">
                                    <StyledParagraph>
                                        Dato escolar
                                    </StyledParagraph>
                                </Typography>
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'dato_escolar',
                                    id: 'uncontrolled-native',
                                }}
                                sx={'width:250px'}
                            >
                                <option value={'Sin determinar'} >Elegir</option>
                                <option value={'Turno maniana'}>
                                    <Typography variant="body1" component="div" color="black" fontFamily="Montserrat" >
                                       Turno mañana
                                    </Typography>
                                </option>
                                <option value={'Turno tarde'}>Turno tarde</option>
                                <option value={'Turno noche'}>Turno noche</option>
                                <option value={'Horario extendido'}>Horario extendido</option>
                                <option value={'No asiste'}>No asiste</option>
                                <option value={'Asiste'}>Asiste</option>
                            </NativeSelect>
<TextField
              autoFocus
              margin="dense"
              id="dni"
              
              label="Domicilio"
              name="domicilio"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="dni"
              
              label="Telefono"
              name="telefono"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="dni"
              
              label="Telefono responsable"
              name="tel_responsable"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="dni"
              
              label="autorizado a retirar"
              name="aut_retirar"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
             <TextField
              autoFocus
              margin="dense"
              id="dni"
              
              label="Hora merienda"
              name="hora_merienda"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />
<TextField
              autoFocus
              margin="dense"
              id="name"
              label="Observaciones"
              name="observaciones"
              onChange={handleChange}
              fullWidth
              variant="standard"
            />

          
            <DialogActions>


              <>
              {form.nombre &&form.apellido  ? <> <Button variant="contained" color="primary" onClick={handleDeterminar}> crear </Button></> :  <>Completar los datos</>}
             </>
              <Button variant="outlined" color="error" style={{ marginLeft: "auto" }} onClick={handleClose}>Cancelar</Button>
            </DialogActions>


        </DialogContent>
      </Dialog>
    </Box >


  );
}