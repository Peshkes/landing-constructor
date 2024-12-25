import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationValidationSchema} from "./registrationValidation.ts";
import AuthInput from "../auth-input/AuthInput.tsx";
import AuthForm from "../auth-form/AuthForm.tsx";
import {AuthApi} from "../../../features/authentication/AuthApi.ts";
import useAuthentication from "../../../features/authentication/useAuthentication.ts";
import useModal from "../../../shared/components/modal/useModal.tsx";

const RegistrationForm  = () => {
    const login = useAuthentication((state) => state.login);
    const {openMessage, Modal, isOpen} = useModal();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(registrationValidationSchema),
    });

    const onSubmit = (data: FieldValues) => {
        AuthApi.registration(data.name, data.email, data.password)
            .then((res) => {
                if (res) login(data.email, data.password)
                .catch((error) => openMessage(error.toString(), 'error'));
                else openMessage('Не удалось зарегистрироваться: ' + res, 'error');
            })
            .catch((error) => openMessage(error.toString(), 'error'));
    };

    return (
        <>
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
            {isOpen && <Modal/>}
        </>
    );
};

export default RegistrationForm;
