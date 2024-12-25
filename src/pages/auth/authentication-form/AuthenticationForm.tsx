import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {authenticationValidationSchema} from "./authenticationValidation.ts";
import AuthForm from "../auth-form/AuthForm.tsx";
import AuthInput from "../auth-input/AuthInput.tsx";
import useAuthentication from "../../../features/authentication/useAuthentication.ts";
import useModal from "../../../shared/components/modal/useModal.tsx";

const AuthenticationForm = () => {
    const login = useAuthentication((state) => state.login);
    const {openMessage, Modal, isOpen} = useModal();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(authenticationValidationSchema),
    });

    const onSubmit = (data: FieldValues) => {
        login(data.email, data.password)
            .catch((res) => openMessage('Не удалось авторизоваться: ' + res.message, 'error'));
    };

    return (
        <>
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
            {isOpen && <Modal/>}
        </>
    );
};

export default AuthenticationForm;
