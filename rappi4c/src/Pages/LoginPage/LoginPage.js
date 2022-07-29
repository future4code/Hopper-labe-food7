import React from "react";
import styled from 'styled-components'
import logo from '../../Assets/logo-future-eats-invert.png'
import {Img, Login, Text} from './style'
import { Form } from "./Form";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const LoginPage = () => {
    useUnprotectedPage()
  return (
    <Login>
      <Img src={logo} alt="logo do rappi4" />
      <Text>Entrar</Text>
      <Form/>
      <Text> Não possui cadastro? <>Clique aqui</> </Text>
    </Login>
  );
};

  export default LoginPage;