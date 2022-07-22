import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from './styled'
import { Container } from "@mui/system";


const Cadastro = () => {
   
  
  const onChangeNome = (event) => {

  }

  const onChangeEmail = (event) => {
    
  }

  const onChangeCpf = (event) => {
    
  }

  const onChangeSenha = (event) => {
    
  }

  const onChangeSenhaConfirm = (event) => {
    
  }
  
  return (
      <>
          <img></img>
          <h3>cadastro</h3>
          {/* <input onChange={onChangeNome} placeholder='Nome e sobrenome' type="text"></input>
          <input onChange={onChangeEmail} placeholder='email@email.com' type="email"></input>
          <input onChange={onChangeCpf} placeholder='000.000.000-00' type=""></input>
          <input onChange={onChangeSenha} placeholder='Mínimo 6 caracteres'></input>
          <input onChange={onChangeSenhaConfirm} placeholder='Corfirme a senha anterior'></input> */}
          <Container>
          <TextField 
          onChange={onChangeNome}
          required
          id="outlined-required"
          label="Nome"
          placeholder="Nome e sobrenome"
          />
          </Container>
          <Container >
          <TextField 
          onChange={onChangeEmail}
          required
          id="outlined-required"
          label="email"
          placeholder="'email@email.com"
          type="email"
          />
          </Container>
          <Container >
          <TextField 
          onChange={onChangeCpf}
          required
          id="outlined-required"
          label="CPF"
          placeholder="'000.000.000-00"
          type="text"
          
          />
          </Container>
          <Container >
          <TextField 
          onChange={onChangeSenha}
          required
          id="outlined-required"
          label="Senha"
          placeholder="Mínimo 6 caracteres"
          type="password"
          />
          </Container>
          <Container >
          <TextField 
          onChange={onChangeSenhaConfirm}
          required
          id="outlined-required"
          label="Senha"
          placeholder="Confirme a senha anterior"
          type="password"
          />
          </Container>

          <Button>Criar</Button>
      </>
    );
  };

  export default Cadastro;