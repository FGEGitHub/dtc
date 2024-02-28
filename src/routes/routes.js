


import Logindtc from '../pages/dtc/login';
import DtcMenu from '../pages/dtc/nivel1/menu';
import DetUsuarios from '../pages/dtc/nivel1/usuarios';
import DtcMedtchiques from '../pages/dtc/nivel1/chiques';
import DtcPersonal from '../pages/dtc/nivel1/personal';
import Dtcusuario from '../pages/dtc/nivel1/usuario';

import DTCAsistencia from '../pages/dtc/nivel2/asistencia';
import DTCactividadescarga from '../pages/dtc/cargaactividades';

import DTCpresentes from '../pages/dtc/libre/asistencia';


const Rutas = [


	
	/*{	path: '/',	element: <NotFound />
		}, */
/* 		{ path: '/', element: <Login /> },
		{ path: '/login', element: <Login /> },
		{ path: '/deslogin', element: <Deslogin /> },
	
 */


		{ path: '/dtc/login', element: <Logindtc/> },
		{ path: '/dtc/usuario1/menu', element: <DtcMenu/> },
		{ path: '/dtc/usuario1/usuarios', element: <DetUsuarios/> },
		{ path: '/dtc/usuario1/chiques', element: <DtcMedtchiques/> },
		{ path: '/dtc/usuario1/personal', element: <DtcPersonal/> },
		{ path: '/dtc/usuario1/usuario/:id', element: <Dtcusuario/> },

		{ path: '/dtc/usuario2/asistencia', element: <DTCAsistencia/> },
		
		{ path: '/dtc/actividades', element: <DTCactividadescarga/> },
		{ path: '/dtc/presentes', element: <DTCpresentes/> },
		
		

];

export default Rutas;