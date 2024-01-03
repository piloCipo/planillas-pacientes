import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import '../hojas de estilos/Cargar.css';
import { MenuItem } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function CargarPaciente() {

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));
  };

  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    sexo: '',
    telefono: '',
    obraSocial: '',
    domicilio: '',
    fechaIngreso: ''
  })

  const navigate = useNavigate();
  const handleFormSubmit = async () => {

    if (!formData.dni || !formData.nombre || !formData.apellido || !formData.fechaNacimiento || !formData.fechaIngreso || !formData.obraSocial) {
      toast.error("COMPLETE LOS CAMPOS OBLIGATORIOS", { autoClose: 1300 });
      return;
    }

    try {
      console.log(formData);
      const response = await fetch('http://localhost:8080/api/users/cargarPaciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("paciente cargado con exito", { autoClose: 1300 });
        setTimeout(() => {
          navigate('/componentes/PatologiasCargar');
        }, 2200); 
      } else {
        toast.error("Error de autenticacion", { autoClose: 1300 });
      }
    } catch (error) {
      toast.error("error al enviar formulario", error, { autoClose: 1300 });
    }
  }

  const currencies = [
    {value: 'Masculino', label: 'Masculino'},
    {value: 'Femenino', label: 'Femenino'},
    {value: 'No especifica', label: 'No especifica'}
  ];

  const [numeroHistoriaClinica, setNumeroHistoriaClinica] = useState('');

  useEffect(() => {
    const obtenerUltimoId = async () => {
      try {
        const respuesta = await fetch('http://localhost:8080/api/users/ultimo-id');
        const ultimoId = await respuesta.json();
        const nuevoId = parseInt(ultimoId) + 1;
        setNumeroHistoriaClinica(nuevoId.toString());
      } catch (error) {
        console.error('Error al obtener y actualizar el ID:', error);
      }
    };

    obtenerUltimoId();
  }, []);

 

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div >
        <div className='datos-personales'>
          <div>
            <h5 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', paddingBottom: '5px' }}>Datos Personales</h5>
            <TextField
              disabled
              label="N° historia clinica"
              type='text'
              id="outlined-start-adornment"
              value={numeroHistoriaClinica}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <TextField
              required
              className='dni-label'
              label="DNI"
              type='number'
              id="outlined-start-adornment"
              value={formData.dni}
              onChange={(e) => handleInputChange(e, 'dni')}
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
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                inputProps: {
                  min: 0,  
                  step: 1,  
                },
              }}
            />
            <TextField
              required
              label="Nombre"
              type='text'
              id="outlined-start-adornment"
              value={formData.nombre}
              onChange={(e) => handleInputChange(e, 'nombre')}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <TextField
              label="Apellido"
              type='text'
              required
              id="outlined-start-adornment"
              value={formData.apellido}
              onChange={(e) => handleInputChange(e, 'apellido')}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <TextField
              label="Fecha de nacimiento"
              type='date'
              required
              id="outlined-start-adornment"
              value={formData.fechaNacimiento}
              onChange={(e) => handleInputChange(e, 'fechaNacimiento')}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
          </div>
            <TextField
              id="outlined-start-adornment"
              select
              label="Sexo"
              onChange={(e) => handleInputChange(e, 'sexo')}
              value={formData.sexo}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            > 
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Telefono"
              type='number'
              id="outlined-start-adornment"
              value={formData.telefono}
              onChange={(e) => handleInputChange(e, 'telefono')}
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
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                inputProps: {
                  min: 0,  
                  step: 1,  
                },
              }}
            />
            <TextField
              label="Obra social"
              type='text'
              required
              id="outlined-start-adornment"
              value={formData.obraSocial}
              onChange={(e) => handleInputChange(e, 'obraSocial')}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <TextField
              autoComplete='off'
              label="Domicilio"
              type='text'
              id="outlined-start-adornment"
              value={formData.domicilio}
              onChange={(e) => handleInputChange(e, 'domicilio')}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <TextField
              label="Fecha de ingreso"
              type='date'
              required
              id="outlined-start-adornment"
              value={formData.fechaIngreso}
              onChange={(e) => handleInputChange(e, 'fechaIngreso')}
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <br/>
          </div>
          <div className='boton_cargar'>
            <Button 
              sx={{ m: 1, width: '25ch'}}
              variant="contained"
              onClick={handleFormSubmit}
            >
              Cargar paciente
            </Button>  
          </div>
      </div>
    </Box>
  );
}