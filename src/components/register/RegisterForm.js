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
      <div>
          <h1>Registrate</h1>
          <section>
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
                      <Form>
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40"
                              name="name"
                              placeholder="Ingresa tu nombre"
                              type="text"
                          />
                          {errors.name && touched.name ? (
                              <div className="text-red-500 shadow-lg text-center ">
                                  {errors.name}
                              </div>
                          ) : null}
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40"
                              name="email"
                              placeholder="Ingresa tu correo"
                              type="email"
                          />
                          {errors.email && touched.email ? (
                              <div className="text-red-500 shadow-lg text-center ">
                                  {errors.email}
                              </div>
                          ) : null}
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40"
                              name="password"
                              placeholder="Ingresa un password"
                              type="password"
                          />
                          {errors.password && touched.password ? (
                              <div className="text-red-500 shadow-lg text-center ">
                                  {errors.password}
                              </div>
                          ) : null}
                          <Field
                              className="text-center align-middle m-1 w-2/3 mx-auto border-2 border-caribbean-green-500
                    rounded-lg border-opacity-40"
                              name="confirmPassword"
                              placeholder="Ingresa un password"
                              type="password"
                          />
                          {errors.confirmPassword && touched.confirmPassword ? (
                              <div className="text-red-500 shadow-lg text-center ">
                                  {errors.confirmPassword}
                              </div>
                          ) : null}
                        <button type='submit'  className=''>Registrarse</button>
                      </Form>
                  )}
              </Formik>
          </section>
      </div>
  );
}

export default RegisterForm