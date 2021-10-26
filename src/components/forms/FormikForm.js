import React from "react";
import { useFormik } from 'formik';
import validationSchema from '../../utils/ValidationSchema'
import { register } from "../../utils/FakeApi";

const FormikForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    };

    const { 
        values, handleChange, handleBlur,
        isSubmitting, isValid, touched, 
        handleSubmit, setFieldError,
        resetForm, errors } = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    async function onSubmit (formValues){
        try {
            await register(formValues);
            resetForm();
            alert("Inscription effectuée avec succès :)")
        } catch ({ errors }) {
            for(let key in errors) {
                setFieldError(key, errors[key]);
            }
        }
    }

    return (
        <div className="flex items-center">
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-10">
                    <h1 className="text-5xl font-bold">Inscrivez-vous </h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis culpa cumque.</p>
                </div>
                <div className="my-4">
                    <input type="text" className="input " placeholder="Votre nom"
                           name="name"
                           value={values.name}
                           onChange={handleChange}
                           onBlur={handleBlur}
                    />
                    { touched.name && errors.name && <small className="error">{ errors.name }</small>}
                </div>
                <div className="my-4">
                    <input type="email" className="input" placeholder="Votre email" name="email"
                           value={values.email}
                           onChange={handleChange}
                           onBlur={handleBlur}
                    />
                    { touched.email && errors.email && <small className="error">{ errors.email }</small>}
                </div>
                <div className="my-4">
                    <input type="password"
                           className="input"
                           placeholder="Votre mot de passe"
                           name="password"
                           value={values.password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                    />
                    { touched.password && errors.password && <small className="error">{ errors.password }</small>}
                </div>
                <div className="my-4">
                    <input type="password"
                           className="input"
                           placeholder="Votre mot de passe (confirmation)"
                           name="passwordConfirmation"
                           value={values.passwordConfirmation}
                           onChange={handleChange}
                           onBlur={handleBlur}
                    />
                    { touched.passwordConfirmation && errors.passwordConfirmation && <small className="error">{ errors.passwordConfirmation }</small>}
                </div>
                <div className="my-4">
                    <button className="btn" disabled={isSubmitting || ! isValid}>S'inscrire</button>
                </div>
            </form>
        </div>
    )
};

export default FormikForm;