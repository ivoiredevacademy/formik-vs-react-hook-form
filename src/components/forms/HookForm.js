import React from "react";
import { useForm } from "react-hook-form";
import {register as registerApi } from "../../utils/FakeApi";
import validationSchema from '../../utils/ValidationSchema'
import { yupResolver } from "@hookform/resolvers/yup";

function HookForm() {
    const  { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(validationSchema)
    });

    async function onSubmit(formValues) {
        try {
            await registerApi(formValues);
            reset();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex items-center">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-10">
                    <h1 className="text-5xl font-bold">Inscrivez-vous</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis culpa cumque.</p>
                </div>
                <div className="my-4">
                    <input type="text" className="input " placeholder="Votre nom"
                           { ...register('name')}
                    />
                    {
                        errors.name  && <small className="error">{ errors.name.message }</small>
                    }
                </div>
                <div className="my-4">
                    <input type="email" className="input" placeholder="Votre email"
                           { ...register('email')}
                    />
                    {
                        errors.email  && <small className="error">{ errors.email.message }</small>
                    }
                </div>
                <div className="my-4">
                    <input type="password" className="input" placeholder="Votre mot de passe"
                           { ...register('password')}
                    />
                    {
                        errors.password  && <small className="error">{ errors.password.message }</small>
                    }
                </div>
                <div className="my-4">
                    <input type="password" className="input" placeholder="Votre mot de passe (confirmation)"
                           { ...register('passwordConfirmation')}
                    />
                    {
                        errors.passwordConfirmation  && <small className="error">{ errors.passwordConfirmation.message }</small>
                    }
                </div>
                <div className="my-4">
                    <button className="btn" type="submit">S'inscrire</button>
                </div>
            </form>
        </div>
    )
}

export default HookForm;