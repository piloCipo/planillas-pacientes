import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, InputAdornment, TextField } from "@mui/material"
import '../hojas de estilos/Cargar.css';
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";


export default function CargarSignos() {

  const { numeroDeHistoriaClinica } = useParams();

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const RemoveSpin = {
    m: 1,
    width: '25ch',
    '& input[type="number"]': {
      '-moz-appearance': 'textfield', 
      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
  }

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));
  };

  const [formData, setFormData] = useState({
    idPaciente: numeroDeHistoriaClinica,
    alta: 0,
    baja: 0,
    cardiaca: 0,
    respiratoria: 0,
    temperatura: 0,
    saturacion: 0,
  });

  const handleFormSubmit = async () => {
    if (!formData.alta || !formData.baja|| !formData.cardiaca || !formData.respiratoria || !formData.temperatura || !formData.saturacion) {
      toast.error("COMPLETE TODOS CAMPOS", { autoClose: 1300 });
      return;
    }
    
     try {
      console.log(formData)
      const response = await fetch('http://localhost:8080/api/users/cargarSignos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("datos cargados con exito", { autoClose: 1300 });
      } else {
        toast.error("Error de carga de datos", { autoClose: 1300 });
      }
    } catch (error) {
      toast.error("error al enviar formulario", error, { autoClose: 1300 });
    }
  }

  return(
    <div className='signos'> 

      <div> 
        <strong>Fecha y Hora Actual:</strong>{" "} 
        {currentDateTime.toLocaleString()} 
      </div>

      <h5 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', paddingBottom: '5px', marginTop: '20px' }}>Signos</h5>
      <h7 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', paddingBottom: '5px', marginTop: '20px'  }}>ingresar valores de tres cifras</h7>
      <br/><br/>
        <TextField
          label="t.a Sistolica"
          type='number'
          id="outlined-start-adornment"
          sx={RemoveSpin}
          onChange={(e) => handleInputChange(e, 'alta')}
          InputProps={{
            startAdornment: <InputAdornment position="start">(mmHg)</InputAdornment>,
            inputProps: {
              min: 0,
              max: 999,
              step: 1,
            },
          }}
        />
        <TextField
          label="t.a Diastolica"
          type='number'
          id="outlined-start-adornment"
          sx={RemoveSpin}
          onChange={(e) => handleInputChange(e, 'baja')}
          InputProps={{
            startAdornment: <InputAdornment position="start">(mmHg)</InputAdornment>,
          }}
        />
        <TextField
          label="Frecuencia cardiaca"
          type='number'
          id="outlined-start-adornment"
          sx={RemoveSpin}
          onChange={(e) => handleInputChange(e, 'cardiaca')}
          InputProps={{
            startAdornment: <InputAdornment position="start">(ppm)</InputAdornment>,
          }}
        /> <br/>
        <TextField
          label="Frecuencia respiratoria"
          type='number'
          id="outlined-start-adornment"
          sx={RemoveSpin}
          onChange={(e) => handleInputChange(e, 'respiratoria')}
          InputProps={{
            startAdornment: <InputAdornment position="start">(rpm)</InputAdornment>,
          }}
        />
        <TextField
          label="Temperatura"
          type='number'
          id="outlined-start-adornment"
          sx={RemoveSpin}
          onChange={(e) => handleInputChange(e, 'temperatura')}
          InputProps={{
            startAdornment: <InputAdornment position="start">(°C)</InputAdornment>,
          }}
        />
        <TextField
          label="Saturacion oxigeno"
          type='number'
          id="outlined-start-adornment"
          sx={RemoveSpin}
          onChange={(e) => handleInputChange(e, 'saturacion')}
          InputProps={{
            startAdornment: <InputAdornment position="start">(%O2)</InputAdornment>,
          }}
        /><br/>
        <Button 
          sx={{ m: 1, width: '25ch'}}
          variant="contained"
          onClick={handleFormSubmit}
        >
          Cargar Signos
        </Button> 
      </div> 
  )     
}


