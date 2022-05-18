import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-10 text-caribbean-green-600 align-top text-center">
            <h4
                onClick={() => {
                    navigate("/Registro");
                }}
            >
                Aun no tienes cuenta, registrate aqui
            </h4>
        </div>
    );
};

export default Register;
