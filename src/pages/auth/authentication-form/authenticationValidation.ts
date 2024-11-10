import * as yup from 'yup';

export const authenticationValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Некорректный адрес электронной почты')
        .required('Электронная почта обязательна'),
    password: yup
        .string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
        .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
        .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
        .required('Пароль обязателен'),
});
