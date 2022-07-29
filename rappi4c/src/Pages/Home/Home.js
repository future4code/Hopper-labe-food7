import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const Home = () => {
    useProtectedPage()
    return (
      <>
          <h2><u>Home</u></h2>
      </>
    );
  };

  export default Home;