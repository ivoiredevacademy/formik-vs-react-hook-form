import React from "react";

function BaseForm() {
    return (
        <div className="flex items-center">
            <form action="">
                <div className="mb-10">
                    <h1 className="text-5xl font-bold">Inscrivez-vous</h1>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis culpa cumque.</p>
                </div>
                <div className="my-4">
                    <input type="text" className="input error" placeholder="Votre nom"/>
                    <small className="error">An message error</small>
                </div>
                <div className="my-4">
                    <input type="email" className="input" placeholder="Votre email"/>
                </div>
                <div className="my-4">
                    <input type="password" className="input" placeholder="Votre mot de passe"/>
                </div>
                <div className="my-4">
                    <input type="password" className="input" placeholder="Votre mot de passe (confirmation)"/>
                </div>
                <div className="my-4">
                    <button className="btn">S'inscrire</button>
                </div>
            </form>
        </div>
    )
}

export default BaseForm;