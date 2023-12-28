import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, InputAdornment, TextField } from "@mui/material"
import '../hojas de estilos/Cargar.css';


const CargarPatologias = () => {

const [otrosChecked1, setOtrosChecked1] = useState(false);
const [otrosChecked2, setOtrosChecked2] = useState(false);
const handleOtrosChange1 = (event) => {
  setOtrosChecked1(event.target.checked);
};

const handleOtrosChange2 = (event) => {
  setOtrosChecked2(event.target.checked);
};

const handleCheckboxChange = (event, fieldName) => {
  const { checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: checked,
    }));
  };

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));
  };

  const [formData, setFormData] = useState({
    hipertension: false,
    insuficienciaCardiaca: false,
    diabetes: false,
    asma: false,
    oncologicos: false,
    otrasPatologias: '',
    alcohol: false,
    tabaco: false,
    sedentarismo: false,
    insomio: false,
    estres: false,
    otrosEstilosVida: '',
    diagnostico: ''
  });

  return(
    <div className="contenedor">
      <div className='patologias'>
        <h5 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', paddingBottom: '5px', marginTop: '20px' }}>Patologias</h5>
          <FormControlLabel 
            control= {<Checkbox size="small"/>}
            label={<span style={{ fontSize: '14px' }}>hipertension</span>}
            checked={formData.hipertension}
            onChange={(e) => handleCheckboxChange(e, 'hipertension')} 
          />  
          <FormControlLabel 
            control= {<Checkbox size="small"/>}
            label={<span style={{ fontSize: '14px' }}>insuficiencia cardiaca</span>}
            checked={formData.insuficienciaCardiaca}
            onChange={(e) => handleCheckboxChange(e, 'insuficienciaCardiaca')} 
            /> 
            <FormControlLabel 
            control= {<Checkbox size="small"/>}
            checked={formData.diabetes}
            label={<span style={{ fontSize: '14px' }}>diabetes</span>}
            onChange={(e) => handleCheckboxChange(e, 'diabetes')} 
            /> 
            <FormControlLabel 
            control= {<Checkbox size="small"/>}
            checked={formData.asma}
            label={<span style={{ fontSize: '14px' }}>asma</span>}
            onChange={(e) => handleCheckboxChange(e, 'asma')} 
            /> 
            <FormControlLabel 
            control= {<Checkbox size="small" />}
            checked={formData.oncologicos}
            label={<span style={{ fontSize: '14px' }}>oncologicos</span>}
            onChange={(e) => handleCheckboxChange(e, 'oncologicos')} 
            /> 
            <FormControlLabel 
            control= {<Checkbox size="small" checked={otrosChecked1} onChange={handleOtrosChange1}/>}
            label={<span style={{ fontSize: '14px' }}>otros</span>}
            /> 
            <TextField
            disabled={!otrosChecked1}
            label="especifique"
            type='text'
            id="outlined-start-adornment"
            value={formData.otrasPatologias}
            onChange={(e) => handleInputChange(e, 'otrasPatologias')}
            sx={{ m: 1, width: '25ch', height: '25px'}}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          />
      </div> 

       <div className='estilo_vida'>
        <h5 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', paddingBottom: '5px', marginTop: '20px' }}>Estilo de vida</h5>
        <FormControlLabel 
          control= {<Checkbox size="small"/>}
          checked={formData.alcohol}
          label={<span style={{ fontSize: '14px' }}>alcohol</span>}
          onChange={(e) => handleCheckboxChange(e, 'alcohol')} 
        /> 
        <FormControlLabel 
          control= {<Checkbox size="small"/>}
          checked={formData.tabaco}
          label={<span style={{ fontSize: '14px' }}>tabaco</span>}
          onChange={(e) => handleCheckboxChange(e, 'tabaco')} 
        /> 
        <FormControlLabel 
          control= {<Checkbox size="small"/>}
          checked={formData.sedentarismo}
          label={<span style={{ fontSize: '14px' }}>sedentarismo</span>}
          onChange={(e) => handleCheckboxChange(e, 'sedentarismo')} 
        /> 
        <FormControlLabel 
          control= {<Checkbox size="small"/>}
          checked={formData.insomio}
          label={<span style={{ fontSize: '14px' }}>insomio</span>}
          onChange={(e) => handleCheckboxChange(e, 'insomio')} 
        /> 
        <FormControlLabel 
          control= {<Checkbox size="small"/>}
          checked={formData.estres}
          label={<span style={{ fontSize: '14px' }}>estres</span>}
          onChange={(e) => handleCheckboxChange(e, 'estres')} 
        /> 
        <FormControlLabel 
          control= {<Checkbox size="small" checked={otrosChecked2} onChange={handleOtrosChange2}/>}
          label={<span style={{ fontSize: '14px' }}>otros</span>}
        /> 
        <TextField
          disabled={!otrosChecked2}
          label="especifique"
          type='text'
          id="outlined-start-adornment"
          value={formData.otrosEstilosVida}
          onChange={(e) => handleInputChange(e, 'otrosEstilosVida')}
          sx={{ m: 1, width: '25ch', height: '25px'}}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        <div className="diagnostico">
          <TextField
            id="outlined-multiline-static"
            label="Diagnostico"
            type='text'
            multiline
            value={formData.diagnostico}
            onChange={(e) => handleInputChange(e, 'diagnostico')}
            sx={{ marginTop: 5, width: '132.7ch'}}
            rows={2}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
          /> 
        </div>
        
      </div> 
      <div className='boton_cargar' style={{margin: '20px'}}>
            <Button 
              sx={{ m: 1, width: '25ch'}}
              variant="contained"
              // onClick={handleFormSubmit}
            >
              Cargar datos
            </Button>  
          </div>
    </div>
    
      
      
                  
    )
}
export default CargarPatologias;


           



    