import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../hojas de estilos/Cargar.css';

export default function BuscarPaciente() {

    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <div className='seccion_buscar'>
            <TextField
              className='dni_label'
              label="N° historia clinica"
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
                startAdornment: <InputAdornment position="start"></InputAdornment>,
                inputProps: {
                  min: 0,  
                  step: 1,  
                },
              }}
            />
            <Button 
              sx={{ m: 2, width: '25ch'}}
              variant="contained">buscar paciente</Button>
          </div>
          
          
          <TextField
            label="PACIENTE"
            id="filled-read-only-input"
            defaultValue=""
            sx={{ m: 1, width: '100ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
              readOnly: true,
            }}
            variant="filled"
          /><br/>
          <TextField
            label="EDAD"
            id="filled-read-only-input"
            defaultValue=""
            sx={{ m: 1, width: '100ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
              readOnly: true,
            }}
            variant="filled"
          /><br/>
          <TextField
            label="DIAGNOSTICO"
            id="filled-read-only-input"
            defaultValue=""
            multiline
            rows={6}
            sx={{ m: 1, width: '100ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
              readOnly: true,
            }}
            variant="filled"
          />
        </div>
      </Box>
    );
  }

