import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Имя должно содержать минимум 2 символа')
        .required('Имя пользователя обязательно'),
    email: yup
        .string()
        .email('Некорректный адрес электронной почты')
        .required('Электронная почта обязательна'),
    phone: yup
        .string()
        .matches(/^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/, 'Некорректный номер телефона')
        .required('Телефон обязателен'),
    password: yup
        .string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
        .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
        .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
        .required('Пароль обязателен'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('Подтверждение пароля обязательно')
});
