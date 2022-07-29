import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const Perfil = () => {
    useProtectedPage()
    return (
      <>
          <h2><u>Perfil</u></h2>
      </>
    );
  };

  export default Perfil;