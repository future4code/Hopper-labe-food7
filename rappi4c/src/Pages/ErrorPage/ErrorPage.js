import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import logo from "../../Assets/logo-future-eats-invert.png"
import styled from "styled-components";

export const Img = styled.img`
  display:flex;
  alling-itens:center;
  width: 104px;
  height: 58px;
  margin: 68px 128px 16px;
  object-fit: contain;
  color: var(--color-Dark_peach)
`

const ErrorPage = () => {
    useUnprotectedPage()
    return (
      <>
        <Img src={logo} alt="logo do rappi4" />
        <h2>Endereço não encontrado</h2>
      </>
    );
  };

  export default ErrorPage;