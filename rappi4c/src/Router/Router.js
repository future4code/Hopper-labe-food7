import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { useState } from "react";
import Cadastro from "../Pages/Cadastro/Cadastro"
import Endereço from "../Pages/Endereço/Endereço"
import Carrinho from "../Pages/Carrinho/Carrinho"
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home"
import LoginPage from "../Pages/LoginPage/LoginPage";
import Perfil from "../Pages/Perfil/Perfil";
import EditPerfil from "../Pages/EditPerfil/EditPerfil";
import SplachScren from "../Pages/SplashScreen/SplashScreen"

const Router = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route />
            
                <Route path="/screenpage" element={<SplachScren/>}/>
                
                <Route path="/" element={<LoginPage />}/>

                <Route path="/cadastro" element={<Cadastro />}/>

                <Route path="/endereco" element={<Endereço />}/>

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