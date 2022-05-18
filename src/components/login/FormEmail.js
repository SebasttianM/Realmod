import { Field, Form, Formik, validateYupSchema } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { LoginAsync } from "../../redux/actions/ActionsLogin";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email("email@email.com")
        .min(5, "El correo debe tener almenos 5 caracteres")
        .max(50, "El correo debe tener menos de 50 caracteres")
        .required("Debe ingresar un email"),

    password: Yup.string()
        .min(5, "El password es muy corto")
        .max(20, "El password es muy largo")
        .required("Debe ingresar un password"),
});
const FormEmail = () => {
    const dispatch= useDispatch()

    const handleSubmit = ({email, password}) => {
        dispatch(LoginAsync(email,password));
    };


    return (
    
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                handleSubmit(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className="flex flex-col mt-6 gap-3 mx-auto ">
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
                    <button className="btnLogin" type="submit">
                        Iniciar Sesion
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormEmail;
