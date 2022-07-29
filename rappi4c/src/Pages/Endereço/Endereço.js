import React from "react";
import TextField from '@mui/material/TextField';
import { End, Bar,IconNavBack, Text, Title,Conainer, ContainerInput, ContainerLogo,ButtonEnviar,BackIcon } from "./Styled";
import IconBack from '../../Assets/back.png'
import useProtectedPage from "../../hooks/useProtectedPage"


    const Endereço = () => {
      useProtectedPage()

        const onChangeLogradouro = (event) => {

        }

        const onChangeNumero = (event) => {

        }

        const onChangeComplemento = (event) => {

        }

        const onChangeBairro = (event) => {

        }

        const onChangeCidade = (event) => {

        }

        const onChangeEstado = (event) => {

        }
        

        return(
           <End>
            <Bar>
                <IconNavBack>
                <BackIcon><img src={IconBack} alt=""/></BackIcon>
                </IconNavBack>
            </Bar>
            <Title>  
                <Text>Meu endereço</Text>
            </Title>
            <Conainer>
            <ContainerInput>
            <TextField 
                fullWidth
                onChange={onChangeLogradouro}
                required
                id="outlined-required"
                label="Logradouro"
                placeholder="Rua/Av"
              />
            </ContainerInput>
            <ContainerInput>
            <TextField 
                fullWidth
                onChange={onChangeNumero}
                required
                id="outlined-required"
                label="Número"
                placeholder="Número"
              />
            </ContainerInput>
            <ContainerInput>
            <TextField 
                fullWidth
                onChange={onChangeComplemento}
                id="outlined-required"
                label="Complemento"
                placeholder="Apto./bloco"
              />
            </ContainerInput>
            <ContainerInput>
            <TextField 
                fullWidth
                onChange={onChangeBairro}
                required
                id="outlined-required"
                label="Bairro"
                placeholder="Bairro"
              />
            </ContainerInput>
            <ContainerInput>
            <TextField 
                fullWidth
                onChange={onChangeCidade}
                required
                id="outlined-required"
                label="Cidade"
                placeholder="Cidade"
              />
            </ContainerInput>
            <ContainerInput>
            <TextField 
                fullWidth
                onChange={onChangeEstado}
                required
                id="outlined-required"
                label="Estado"
                placeholder="Estado"
              />
            </ContainerInput>

            <ButtonEnviar>Salvar</ButtonEnviar>
            </Conainer>

           </End> 
        );};

    export default Endereço
    
    