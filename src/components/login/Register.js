import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-10 text-caribbean-green-600 align-top text-center pb-4 mb-5 gap-1">
            <p>
                Aun no tienes cuenta, 
                <span
                    className="cursor-pointer ml-1"
                    onClick={() => {
                        navigate("/Registro");
                    }}
                >
                    Registrate aqui!
                </span>
            </p>
        </div>
    );
};

export default Register;
