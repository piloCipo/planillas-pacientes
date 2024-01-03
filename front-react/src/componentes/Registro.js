import { useState } from "react";
import React from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import '../hojas de estilos/Registro.css';
import '../hojas de estilos/Ingreso.css';


const DarseDeAlta = () => {

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState ('');

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleConstrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleConfirmarConstrasenaChange = (event) => {
    setConfirmarContrasena(event.target.value);
  }

  const handleRegistrarmeClick = async () => {

    if (!usuario || !contrasena || !confirmarContrasena) {
      toast.error("COMPLETE TODOS LOS CAMPOS", { autoClose: 1300 });
      return;
    }

    if (contrasena !== confirmarContrasena) {
      toast.error("CONTRASEÑAS NO COINCIDEN", { autoClose: 1300 });
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users/register', {
        usuario: usuario,
        password: contrasena,
      });
      toast.success(`Usuario '${usuario}' creado exitosamente`, { autoClose: 1300 });  
      navigate( '/');
    } catch (error) {
      toast.error("Error al crear usuario", { autoClose: 1300 });
    }
  };

  return ( 
		<div className="contenedor-primario">
			<header className="header">
				<AccountBoxIcon fontSize="large" />
				<h2>Nuevo usuario</h2>
			</header>

			<div className="contenedor-datos">
				<div className="dato">
					<TextField
            required
						id="standard-required"
						label="Usuario"
						variant="standard"
            value={usuario}
            onChange={handleUsuarioChange}
					/>
				</div>
				<div className="dato">
					<TextField
            required
            id="standard-password-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={contrasena}
            onChange={handleConstrasenaChange}
            />
				</div>

        <div className="dato">
					<TextField
            required
            id="standard-password-input"
            label="Comfirmar contraseña"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={confirmarContrasena}
            onChange={handleConfirmarConstrasenaChange}
            />
				</div>
			</div>

			<div className="contenedor-acciones-registro">
				<div className="botones-registro">
					<Button
						className="boton-iniciar"
						variant="contained"
						onClick={handleRegistrarmeClick}
					>
						Registrarme
					</Button>
				</div>
			</div>
		</div>
		
  );
}
 
export default DarseDeAlta;

