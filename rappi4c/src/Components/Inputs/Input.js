import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Input = () => {
  return (
    <div>
      <TextField 
        required
        fullWidth
        id="outlined-required"
        label="Nome"
        type="text"
      />
      
    </div>
  )
}