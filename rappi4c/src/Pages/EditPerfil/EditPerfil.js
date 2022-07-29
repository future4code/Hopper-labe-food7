import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";


const EditPerfil = () => {
    useProtectedPage()
    return (
      <>
          <h2><u>EditPerfil</u></h2>
      </>
    );
  };

  export default EditPerfil;