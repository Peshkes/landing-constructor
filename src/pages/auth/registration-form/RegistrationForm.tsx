import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationValidationSchema} from "./registrationValidation.ts";
import AuthInput from "../auth-input/AuthInput.tsx";
import AuthForm from "../auth-form/AuthForm.tsx";

const RegistrationForm  = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(registrationValidationSchema),
    });

    const onSubmit = (data: FieldValues) => {
        console.log('Регистрационные данные:', data);
    };

    return (
        <AuthForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
        >
            <AuthInput
                id="name"
                label="Имя пользователя"
                register={register}
                error={errors.name}
            />
            <AuthInput
                id="email"
                label="Электронная почта"
                type="email"
                register={register}
                error={errors.email}
            />
            <AuthInput
                id="password"
                label="Пароль"
                type="password"
                register={register}
                error={errors.password}
            />
            <AuthInput
                id="confirmPassword"
                label="Подтвердите пароль"
                type="password"
                register={register}
                error={errors.confirmPassword}
            />
        </AuthForm>
    );
};

export default RegistrationForm;
