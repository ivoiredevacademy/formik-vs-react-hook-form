import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().required('Le nom est requis'),
    email: Yup.string().required('Le champ email est requis').email('Veuillez saisir une adresse email valide'),
    password: Yup.string().required('Le champ mot de passe est requis').min(8, 'Le mot de passe doit avoir au moins 8 caractères'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas')
});