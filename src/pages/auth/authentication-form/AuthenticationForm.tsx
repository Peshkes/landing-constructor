import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {authenticationValidationSchema} from "./authenticationValidation.ts";
import AuthForm from "../auth-form/AuthForm.tsx";
import AuthInput from "../auth-input/AuthInput.tsx";
import useAuthentication from "../../../features/authentication/useAuthentication.ts";

const AuthenticationForm = () => {
    const {login} = useAuthentication();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(authenticationValidationSchema),
    });

    const onSubmit = (data: FieldValues) => {
        console.log('Авторизационные данные:', data);
        login(data.email, data.password);
    };
    return (
        <AuthForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
        >
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
        </AuthForm>
    );
};

export default AuthenticationForm;
