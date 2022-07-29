import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Cadast, Bar,IconNavBack, ImgLogo, Text, Title,Conainer, ContainerInput, ContainerLogo,ButtonEnviar,BackIcon } from "./styled";
import IconBack from '../../Assets/back.png'
import Logo from '../../Assets/logo-future-eats-invert.png'
import Passoword from "./Passoword";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


 const Cadastro = () => {
   useUnprotectedPage()
  
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
    <Cadast>
      <Bar>
        <IconNavBack>
          <BackIcon><img src={IconBack} alt=""/></BackIcon>
        </IconNavBack>
      </Bar>
      <ContainerLogo>
        <ImgLogo src={Logo} alt="" />
      </ContainerLogo>  
      <Title>  
          <Text>Cadastrar</Text>
      </Title>
    <Conainer> 
    <ContainerInput>  
      <TextField 
        fullWidth
        onChange={onChangeNome}
        required
        id="outlined-required"
        label="Nome"
        placeholder="Nome e sobrenome"
      />
    </ContainerInput>
    <ContainerInput>
      <TextField
        fullWidth  
        onChange={onChangeCpf}
        required
        id="outlined-required"
        label="CPF"
        placeholder="000.000.000-00"
        type="text"
      />
      </ContainerInput>
    <ContainerInput>
      <TextField
        fullWidth 
        onChange={onChangeEmail}
        required
        id="outlined-required"
        label="E-mail"
        placeholder="email@email.com"
        type="email"
      />
    </ContainerInput>
      <ContainerInput>
        <Passoword/>  
      </ContainerInput>
        <ButtonEnviar>Criar</ButtonEnviar>     
      </Conainer>
      </Cadast>
    );
  };

  export default Cadastro;

     

         