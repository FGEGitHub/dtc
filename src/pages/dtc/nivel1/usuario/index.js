



import Menuizq from '../../../../components/dtc/usuario1/menuizq1'
import { useNavigate, useParams } from "react-router-dom";
import Login from '../../../../components/dtc/usuario/ficha'
import React, { useEffect, useState } from "react";
import MenuuCel from '../../../../components/dtc/usuario1/menuresp'
import Modallegajo from '../../../../components/dtc/usuario/listalegajos'
import Avtvidadchicos from '../../../../components/dtc/usuario1/actividades/actividades1pers'
import {

  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      maxWidth: '600px', // Define el ancho máximo en pantallas más grandes
      margin: '0 auto', // Centra el contenido en pantallas más grandes
    },
    transform: 'scale(0.90)', // Escala al 75%
    transformOrigin: 'center center', // Origen de la transformación en el centro
  },
}));

export default function Paginas() {
  const navigate = useNavigate();
    const theme = useTheme();
    const classes = useStyles();
    const [loginVisible, setLoginvisible] = useState(false)
    const [usuario, setUsuario] = useState({})
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    useEffect(() => {
      traer()
       
      }, [])
      const traer = async () => {

        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          console.log(usuario)
          setUsuario(usuario)
         console.log(usuario)
          switch (user.nivel) {
            case 20:
             break;
           //   navigate('/')
           case 21:
            break;
           
            default:
            
                window.localStorage.removeItem('loggedNoteAppUser')
                navigate("/dtc/login")
              break;
          }
        }else{
          
          navigate('/dtc/login')
              window.localStorage.removeItem('loggedNoteAppUser')
              alert('usuario no autorizado')
        }
        setLoginvisible(true)

      }

    return (
      <>
      {usuario ? <>
      {usuario.nivel  == 20 ? <>
      {isMatch ? 
     <>
     <div  className={classes.container}> 
     <MenuuCel texto="Usuarios"/>
     <Login/>
     <Modallegajo/>
     <Avtvidadchicos/>
    </div>
     </>:<>
 <Menuizq>
<Login/>
<Modallegajo/>
<Avtvidadchicos/>
</Menuizq></>}</>:<>     <Login/> <Avtvidadchicos/></>}</>:<>54558585  {usuario}</>}
 </>
   
    );

}