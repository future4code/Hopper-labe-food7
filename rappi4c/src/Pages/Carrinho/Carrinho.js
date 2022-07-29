import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const Carrinho = () => {
  useProtectedPage()
    return (
      <>
          <h2><u>Carrinho</u></h2>
      </>
    );
  };

  export default Carrinho;