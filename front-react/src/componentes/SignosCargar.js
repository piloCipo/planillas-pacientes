import React, { useEffect, useState } from "react";
import { Button, Checkbox, FormControlLabel, InputAdornment, TextField } from "@mui/material"
import '../hojas de estilos/Cargar.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";





export default function CargarSignos() {

  return(
    <div className='signos'>
          <h5 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', paddingBottom: '5px', marginTop: '20px' }}>Signos</h5>
          <h7 style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)', paddingBottom: '5px', marginTop: '20px'  }}>ingresar valores de tres cifras</h7>
          <br/><br/>
            <TextField
              label="t.a Alta"
              type='number'
              id="outlined-start-adornment"
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
                startAdornment: <InputAdornment position="start">(mmHg)</InputAdornment>,
                inputProps: {
                  min: 0,  
                  step: 1,  
                },
              }}
            />
            <TextField
              label="t.a Baja"
              type='number'
              id="outlined-start-adornment"
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
                startAdornment: <InputAdornment position="start">(mmHg)</InputAdornment>,
              }}
            />
            <TextField
              label="Frecuencia cardiaca"
              type='number'
              id="outlined-start-adornment"
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
                startAdornment: <InputAdornment position="start">(ppm)</InputAdornment>,
              }}
            /> <br/>
            <TextField
              label="Frecuencia respiratoria"
              type='number'
              id="outlined-start-adornment"
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
                startAdornment: <InputAdornment position="start">(rpm)</InputAdornment>,
              }}
            />
            <TextField
              label="Temperatura"
              type='number'
              id="outlined-start-adornment"
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
                startAdornment: <InputAdornment position="start">(°C)</InputAdornment>,
              }}
            />
            <TextField
              label="Saturacion oxigeno"
              type='number'
              id="outlined-start-adornment"
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
                startAdornment: <InputAdornment position="start">(%O2)</InputAdornment>,
              }}
            /><br/>
            <Button 
              sx={{ m: 1, width: '25ch'}}
              variant="contained"
              onClick
            >
              Cargar Signos
            </Button> 
          </div> 
  )
        
}


