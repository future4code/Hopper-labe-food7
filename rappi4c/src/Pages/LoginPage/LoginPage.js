import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Input, Container1 ,Container2, Button, Img} from './style'
import styled from 'styled-components'
import logo from '../../Assets/logo-future-eats.png'

const LoginPage = () => {
    return (
      <>
      <Img src={logo} alt=" logo rappi4c" />
      
      <Container1>
          <TextField 
            required
            fullWidth
            id="outlined-required"
            label="Nome"
            type="text"
          />
      </Container1>
      <Container2> 
          <TextField 
          required
          fullWidth
          id="outlined-required"
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          type="password"
          />
      </Container2>
      <Button>
        Entrar
      </Button>

      <img src={logo} alt="logo rappi4" />    
      </>
    );
  };

  export default LoginPage;