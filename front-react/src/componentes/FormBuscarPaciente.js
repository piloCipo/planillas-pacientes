import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../hojas de estilos/Cargar.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BuscarPaciente() {

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const [data, setData] = useState({
    id:''
  });

  const [datosPaciente, setDatosPaciente] = useState(null);
  const handleSearchSubmit = async () => {
    if (!data.id || data.id <= 0) {
      toast.error("ingrese numero valido de historia clinica", {autoClose: 1300});
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:8080/api/users/id/${parseInt(data.id)}`, {
            method: 'GET',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',
            },
        });

      if (response.ok) {
        const pacientData = await response.json();
        setDatosPaciente(pacientData)
        console.log(datosPaciente)
      } else {
        toast.error('Paciente no encontrado');
      }
    } catch (error) {
      console.error('Error al buscar paciente:', error);
      toast.error('error al buscar paciente');
    }
  }

  const handleDeletePatient = async () => {
    if (!data.id || data.id <= 0) {
      toast.error("Ingrese un número válido de historia clínica", { autoClose: 1300 });
      return;
    }

    const confirmDelete = window.confirm(`¿Estás seguro de eliminar al paciente con número de historia clínica ${data.id}?`);

    if (confirmDelete) {
      try {
        console.log(data.id)
        // Realizar la solicitud para eliminar al paciente y sus datos clínicos
        const response = await fetch(`http://localhost:8080/api/users/id/${parseInt(data.id)}`, {
          method: 'DELETE',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Limpiar el estado local después de la eliminación
          setDatosPaciente(null);
          setData({
            id: ''
          });

          toast.success('Paciente eliminado exitosamente');
        } else {
          toast.error('Error al eliminar paciente');
        }
      } catch (error) {
        console.error('Error al eliminar paciente:', error);
        toast.error('Error al eliminar paciente');
      }
    }
  };

  const [mostrarHistorial, setMostrarHistorial] = useState(false);
  const handleSearch = async () => {
    setMostrarHistorial(true);
    try {
      const response = await fetch(`http://localhost:8080/api/users/paciente/${parseInt(data.id)}`,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
      });

      if(response.ok) {
        const historialSignos = await response.json();
        console.log(historialSignos);
      } else {
        toast.warning('no se encontraron datos');
      }
    } catch (error) {
      toast.error('error al traer signos');
    }
  }
  
  function CalcularEdad({ fechaNacimiento }) {
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const fechaActual = new Date();
  
    const edadEnMilisegundos = fechaActual - fechaNacimientoObj;
    const edadCalculada = Math.abs(new Date(edadEnMilisegundos).getUTCFullYear() - 1970);
  
    return edadCalculada;
  }
  
  const edadActual = datosPaciente?.paciente.fechaNacimiento
    ? CalcularEdad({ fechaNacimiento: datosPaciente.paciente.fechaNacimiento })
    : null;

  const navigate = useNavigate();
  const handleCargarSignos = () => {
    const numeroDeHistoriaClinica = data.id;
    navigate(`/componentes/SignosCargar/${numeroDeHistoriaClinica}`)
  } 
 
  
   
    return (
      <Box >
        <div className='container'>
          <div className='seccion_buscar'>
            <TextField
              required
              label="N° historia clinica"
              type='number'
              id="outlined-start-adornment"
              value={data.id}
              onChange={(e) => handleInputChange (e, 'id')}
              sx={{
                m: 1,
                width: '25ch',
                '& input[type="number"]': {
                  '-moz-appearance': 'textfield', 
                  '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0,
                  },
                },
              }}
              InputProps={{
                inputProps: {
                  min: 1,  
                  step: 1,  
                },
              }}
            />
            <Button 
              sx={{ m: 2, width: '25ch'}}
              onClick={handleSearchSubmit}
              variant="contained">buscar paciente</Button>
          </div>
          

          {!mostrarHistorial && (
            <div className="seccion_datos">
              {datosPaciente && (
                <>
                  <TextField
                    label="informacion"
                    id="filled-read-only-input"
                    multiline
                    rows={5}
                    value={`
                  paciente ${datosPaciente.paciente.nombre.toUpperCase()} ${datosPaciente.paciente.apellido.toUpperCase()} 
                  ${edadActual !== null ? `de ${edadActual} años` : ''}
                  diagnostico: "${datosPaciente.datosClinicos.diagnostico}", con fecha de ingreso el ${datosPaciente.paciente.fechaIngreso}`}
                    sx={{ m: 1, width: '120ch' }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"></InputAdornment>,
                      readOnly: true,
                    }}
                    variant="filled"
                  /><br />

                  <TextField
                    label="datos clinicos y habitos"
                    id="filled-read-only-input"
                    value={`
                      PATOLOGIAS PREVIAS: ${(datosPaciente.datosClinicos.asma) ? "asma - " : ''} ${(datosPaciente.datosClinicos.diabetes) ? "diabetes - " : ''} ${(datosPaciente.datosClinicos.hipertension) ? "hipertension - " : ''} ${(datosPaciente.datosClinicos.insuficienciaCardiaca) ? "insuficiencia cardiaca - " : ''} ${(datosPaciente.datosClinicos.oncologicos) ? "oncologicos - " : ''} ${(datosPaciente.datosClinicos.otrasPatologias) ? datosPaciente.datosClinicos.otrasPatologias + ' -' : ''}
                      HABITOS: ${(datosPaciente.datosClinicos.alcohol) ? "alcohol - " : ''} ${(datosPaciente.datosClinicos.estres) ? "estrés - " : ''} ${(datosPaciente.datosClinicos.insomio) ? "insomio - " : ''} ${(datosPaciente.datosClinicos.sedentarismo) ? "sedentarismo - " : ''} ${(datosPaciente.datosClinicos.tabaco) ? "tabaco - " : ''} ${(datosPaciente.datosClinicos.otrosEstilosVida) ? datosPaciente.datosClinicos.otrosEstilosVida + ' -' : ''}
                      `}
                    multiline
                    rows={4}
                    sx={{ m: 1, width: '120ch' }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"></InputAdornment>,
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                  <div className='acciones'>
                    <Button 
                      sx={{ m: 2, width: '25ch'}}
                      onClick={handleCargarSignos}
                      variant="contained">cargar signos
                    </Button>
                    <Button 
                      sx={{ m: 2, width: '25ch'}}
                      onClick={handleSearch}
                      variant="contained">ver historial
                    </Button>
                    <Button 
                      sx={{ m: 2, width: '25ch'}}
                      onClick={handleDeletePatient}
                      variant="contained">eliminar paciente
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}  

                    
          {mostrarHistorial && (
            <div className="seccion_historial">
              {<div className='acciones'>
                    <Button 
                      sx={{ m: 2, width: '25ch'}}
                      onClick={handleCargarSignos}
                      variant="contained">cargar signos
                    </Button>
                    <Button 
                      sx={{ m: 2, width: '25ch'}}
                      onClick={handleSearch}
                      variant="contained">ver historial
                    </Button>
                    <Button 
                      sx={{ m: 2, width: '25ch'}}
                      onClick={handleDeletePatient}
                      variant="contained">eliminar paciente
                    </Button>
                  </div>}
            </div>
          )}

        </div>
      </Box>
    );
  }

  
 
  