import React from "react";
import { IMaskInput  } from 'react-imask';
import Box from '@mui/material/Box';
import PropTypes from "prop-types"
import TextField from '@mui/material/TextField';
import { Cadast, Bar,IconNavBack, ImgLogo, Text, Title,Conainer, ContainerInput, ContainerLogo,ButtonEnviar,BackIcon } from "./styled";
import IconBack from '../../Assets/back.png'
import Logo from '../../Assets/logo-future-eats-invert.png'
import Passoword from "./Passoword";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


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
  
  const TextoCustomizado = React.forwardRef(function TextoCustomizado(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput 
        {...other}
        mask="000.000.000-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  
  TextoCustomizado.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const [values, setValues] = React.useState({
    textmask: '000.000.000-00',
  });



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
        onChange={onChangeEmail}
        required
        id="outlined-required"
        label="Email"
        placeholder="'email@email.com"
        type="email"
      />
    </ContainerInput>
    <ContainerInput>
    
    <Box  component="form" noValidate autoComplete="off">
    <FormControl sx={{width:'100%'}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">*CPF</InputLabel>
        <OutlinedInput
          
          onChange={onChangeCpf}
          name="textmask"
          id="formatted-text-mask-input"
          inputComponent={TextoCustomizado}
          label= "fullWidth"
          />
      </FormControl>
      </Box>

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

     

         