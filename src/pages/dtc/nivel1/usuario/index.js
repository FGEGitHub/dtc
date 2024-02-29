



import Menuizq from '../../../../components/dtc/usuario1/menuizq1'
import { useNavigate, useParams } from "react-router-dom";
import Login from '../../../../components/dtc/usuario/ficha'
import React, { useEffect, useState } from "react";
import MenuuCel from '../../../../components/dtc/usuario1/menuresp'
import Modallegajo from '../../../../components/dtc/usuario/listalegajos'
import Avtvidadchicos from '../../../../components/dtc/usuario1/actividades/actividades1pers'

export default function Paginas() {
  const navigate = useNavigate();
  
    const [loginVisible, setLoginvisible] = useState(false)
    const [usuario, setUsuario] = useState({})

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
      
     <>
     <div  > 
     <MenuuCel texto="Usuarios"/>
     <Login/>
     <Modallegajo/>
     <Avtvidadchicos/>
    </div>
     </></>:<>     <Login/> <Avtvidadchicos/></>}</>:<>54558585  {usuario}</>}
 </>
   
    );

}