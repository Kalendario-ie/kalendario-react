import * as yup from 'yup';


export interface ChangeUserPasswordRequest {
    userPassword: string;
    password1: string;
    password2: string;
}

export interface ChangeUserPasswordRequest {
    userPassword: string;
    password1: string;
    password2: string;
}

export interface UpsertUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    employee: number | '';
    groups: number[];
}

export const UpsertUserRequestValidation = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
});
