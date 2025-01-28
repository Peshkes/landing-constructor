import * as yup from 'yup';

export const addGroupValidationSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, 'Название должно содержать минимум 3 символа')
        .required('Электронная почта обязательна'),
});
