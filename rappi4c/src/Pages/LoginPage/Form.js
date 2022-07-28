import React from 'react'
import { Input } from '../../Components/Inputs/Input'
import InputSenha from '../../Components/Inputs/InputSenha'
import {Container1 ,Container2, Button,} from './style'


export const Form = () => {


  return (
    <div>
      <Container1>
          <Input/>
      </Container1>
      <Container2>
          <InputSenha/>
       </Container2>
      <Button>
        Entrar
      </Button>
    </div>
  )
}
