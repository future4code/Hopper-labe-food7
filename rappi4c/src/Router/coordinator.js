export const goToSplash = (navigate) => {
    navigate("/screenpage");
};

export const goToLogin = (navigate) => {
    navigate("/");
};

export const goToSignUp = (navigate) => {
    navigate("/cadastro");
};

export const goToHome = (navigate) => {
    navigate("/feed");
};

export const goToCart = (navigate) => {
    navigate("/carrinho");
};

export const goToPerfil = (navigate) => {
    navigate("/perfil");
};

export const goToEditPerfil = (navigate) => {
    navigate("/editarperfil");
};

export const goToError = (navigate) => {
    navigate("*");
};