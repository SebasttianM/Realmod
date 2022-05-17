import React from 'react'
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormEmail from './FormEmail';

const FormLogin = () => {
  return (
      <div className='rounded-2xl shadow-caribbean-green-500'>
          <h1 className="font-semibold text-3xl mt-4   ">Inicia Sesion</h1>
          <h3 className="font-normal text-gray-600 mb-7">
              Registrate con una cuenta
          </h3>
          <div className="flex justify-center gap-10 mt-5 mx-4">
              <FontAwesomeIcon
                  className="p-4 border-2 border-gray-400 rounded-lg bg-slate-400 shadow-sm cursor-pointer
                   shadow-caribbean-green-400 bg-opacity-50 text-orange-600 to-red-600
                "
                  icon={faGoogle}
              />
              <FontAwesomeIcon
                  className="p-4 border-2 border-gray-400 rounded-lg bg-slate-400 shadow-sm cursor-pointer
                   shadow-caribbean-green-400 bg-opacity-50 text-blue-600 to-blue-400
                "
                  icon={faFacebook}
              />
          </div>
          <hr></hr>
          <FormEmail />
      </div>
  );
}

export default FormLogin