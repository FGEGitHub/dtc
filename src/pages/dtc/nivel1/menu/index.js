



import Menuizq from '../../../../components/dtc/usuario1/menuizq1'
import MenuuCel from '../../../../components/dtc/usuario1/menuresp'

import { useNavigate, useParams } from "react-router-dom";
import Login from '../../../../Assets/mantenimiento2.jpeg'
import Menu from '../../../../components/dtc/usuario1/menu/componente1'
import React, { useEffect, useState } from "react";


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
           
       
        
            <MenuuCel texto="Menu"/>
            <Menu/>
           

        </>
   
    );

}