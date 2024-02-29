



import Menuizq from '../../../../components/dtc/usuario1/menuizq1'
import { useNavigate, useParams } from "react-router-dom";
import Login from '../../../../components/dtc/usuario1/usuarios/todos'
import React, { useEffect, useState } from "react";
import MenuuCel from '../../../../components/dtc/usuario1/menuresp'




export default function Paginas() {
  const navigate = useNavigate();

    const [loginVisible, setLoginvisible] = useState(false)
   
    useEffect(() => {
      
        const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
        console.log(loggedUserJSON) 
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          console.log(user)
          switch (user.nivel) {
            case 20:
             break;
           //   navigate('/')
           
           
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
      }, [])

    return (
      <>
   


     <MenuuCel texto="Usuarios"/>
     <Login/>


 </>
   
    );

}