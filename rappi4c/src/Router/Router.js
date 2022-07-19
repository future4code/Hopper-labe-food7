import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { useState } from "react";
import Cadastro from "../Pages/Cadastro/Cadastro"
import Carrinho from "../Pages/Carrinho/Carrinho"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import LoginPage from "../Pages/LoginPage/LoginPage";
import Perfil from "../Pages/Perfil/Perfil";
import EditPerfil from "../Pages/EditPerfil/EditPerfil";

const Router = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route />
            
                <Route path="/" element={<LoginPage />}/>

                <Route path="/cadastro" element={<Cadastro />}/>

                <Route path="/feed" element={<Home />} />
                
                <Route path="/carrinho" element={<Carrinho />}/> 

                <Route path="/perfil" element={<Perfil />}/>

                <Route path="/editarperfil" element={<EditPerfil />}/>

                <Route path="*" element={<ErrorPage />}/>

        </Routes>    
    </BrowserRouter>
        
    )
}

export default Router; 