import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link, useNavigate } from 'react-router-dom';
import '../hojas de estilos/Ingreso.css';
import { toast } from "react-toastify";


const Ingresar = () => {

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: usuario,
          password: contrasena,
        }),
      });

      if (response.ok) {
        toast.success(`BIENVENIDO ${usuario.toUpperCase()}`)
        navigate('./componentes/PaginaUsuario');
      } else if (response.status === 401) {
        toast.error("Datos incorrectos");
      } else {
        toast.error("Error de autenticacion");
      }
    
    
    } catch (error) {
      toast.error("back no esta iniciado", error);
    }
  }



  return ( 
		<div className="contenedor-primario">
			<header className="header">
				<AccountBoxIcon fontSize="large" />
				<h2>Inicio Sesión</h2>
			</header>

			<div className="contenedor-datos">
				<div className="dato">
					<TextField
						required
						id="standard-required"
						label="Usuario"
						variant="standard"
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
            onChange={handleContrasenaChange}
          />
				</div>
			</div>

			<div className="contenedor-acciones">
				<botones className="botones">
            <Button
              className="boton-iniciar"
              variant="contained"
              onClick={handleLogin}
            >
              INICIAR SESIÓN
            </Button>
					
				</botones>
				
				<div className="links">
					<div className="link">
						<Link
							component="button"
							variant="body2"
							onClick={() => {
								console.info("I'm a button.");
							}}
						>
							olvidaste tus datos?
						</Link>
					</div>
					<div className="link">
						<Link
							to='./componentes/Registro'
							component="button"
							variant="body2"
							onClick={() => {
								console.info("I'm a button.");
							}}
						>
							no tienes cuenta? Registrate.
						</Link>
					</div>					
				</div>
			</div>

		</div>
		
  );
}
 
export default Ingresar;

