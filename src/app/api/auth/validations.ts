import * as Yup from 'yup';

export const LoginRequestValidation = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});


export const RegisterRequestValidation = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password1: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    password2: Yup.string()
        .required()
        .oneOf([Yup.ref('password1'), null], 'Passwords must match'),
});
