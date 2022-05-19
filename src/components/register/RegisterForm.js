import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from "yup"
import { RegisterAsync } from '../../redux/actions/ActionsRegister';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(13,"El nombre es demasiado corto")
    .max(50,"El nombre es demasiado largo")
    .required("Debe ingresar un nombre valido"),
    email: Yup.string()
        .email("email@email.com")
        .min(5, "El correo debe tener almenos 5 caracteres")
        .max(50, "El correo debe tener menos de 50 caracteres")
        .required("Debe ingresar un email"),

    password: Yup.string()
        .min(5, "El password es muy corto")
        .max(20, "El password es muy largo")
        .required("Debe ingresar un password")
        .oneOf([Yup.ref('confirmPassword')],'Los password no coinciden'),
    confirmPassword: Yup.string()
        .min(5)
        .max(20)
        .required("El password es obligatorio")
        .oneOf([Yup.ref('password')],'Los password no coinciden'),

});


const RegisterForm = () => {
    const dispatch= useDispatch()
    const handleSubmit = ({ name, email, password }) => {
        dispatch(RegisterAsync(name, email, password));
    };
  return (
      <div className='flex justify-center flex-col items-center relative '>
          <div className=' relative mt-8 py-10'>
           <div className='onePlace font-semibold text-7xl text-center items-center self-center text-caribbean-green-400 
           opacity-40 absolute -z-10 mt-5'>All in one place</div>
           <h1 className='text-4xl font-semibold  my-10 mx-auto p-10 top-1/2 left-1/2 z-10 '>Registrate</h1>
           <img className='w-3/12' src='https://res.cloudinary.com/svartblood/image/upload/v1652913104/realmod/Reallogo_ckdqm4.png'alt=''/>
          </div>
          <section className=' w-11/12 h-auto flex justify-center items-center mt-16'>
              <Formik
                  initialValues={{
                      name: "",
                      email: "",
                      password: "",
                      confirmPassword: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                      handleSubmit(values);
                  }}
              >
                  {({ errors, touched }) => (
                      <Form className='border-2 border-caribbean-green-700 w-8/12 flex justify-center items-center flex-col gap-7
                      bg-caribbean-green-500 opacity-50 py-5 mb-10 rounded-md'>
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40 py-4 font-normal text-2xl"
                              name="name"
                              placeholder="Ingresa tu nombre"
                              type="text"
                          />
                          {errors.name && touched.name ? (
                              <div className="text-gray-800 font-normal text-2xl shadow-lg text-center ">
                                  {errors.name}
                              </div>
                          ) : null}
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40 py-4 font-normal text-2xl"
                              name="email"
                              placeholder="Ingresa tu correo"
                              type="email"
                          />
                          {errors.email && touched.email ? (
                              <div className="text-gray-800 font-normal text-2xl shadow-lg text-center ">
                                  {errors.email}
                              </div>
                          ) : null}
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40 py-4 font-normal text-2xl"
                              name="password"
                              placeholder="Ingresa un password"
                              type="password"
                          />
                          {errors.password && touched.password ? (
                              <div className="text-gray-800 font-normal text-2xl shadow-lg text-center ">
                                  {errors.password}
                              </div>
                          ) : null}
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40 py-4 font-normal text-2xl"
                              name="confirmPassword"
                              placeholder="Vuelve a ingresar el password"
                              type="password"
                          />
                          {errors.confirmPassword && touched.confirmPassword ? (
                              <div className="text-gray-800 font-normal text-2xl shadow-lg text-center ">
                                  {errors.confirmPassword}
                              </div>
                          ) : null}
                        <button type='submit'  className='block text-center justify-center btnRegister'>Registrarse</button>
                      </Form>
                  )}
              </Formik>
          </section>
      </div>
  );
}

export default RegisterForm