import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationValidationSchema} from "./registrationValidation.ts";
import FormInput from "../../../shared/ui/form-input/FormInput.tsx";
import AuthForm from "../auth-form/AuthForm.tsx";
import {AuthApi} from "../../../features/authentication/AuthApi.ts";
import useAuthentication from "../../../features/authentication/useAuthentication.ts";
import useModal from "../../../shared/components/modal/useModal.tsx";

const RegistrationForm  = () => {
    const setUser = useAuthentication((state) => state.setUser);
    const {openMessage, Modal, isOpen} = useModal();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(registrationValidationSchema),
    });

    const onSubmit = (data: FieldValues) => {
        AuthApi.registration(data.name, data.email, data.password, data.phone)
            .then((res) => {
                if (res) setUser(res)
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
                <FormInput
                    id="name"
                    label="Имя пользователя"
                    register={register}
                    error={errors.name}
                />
                <FormInput
                    id="email"
                    label="Электронная почта"
                    type="email"
                    register={register}
                    error={errors.email}
                />
                <FormInput
                    id="phone"
                    label="Телефон"
                    register={register}
                    error={errors.phone}
                />
                <FormInput
                    id="password"
                    label="Пароль"
                    type="password"
                    register={register}
                    error={errors.password}
                />
                <FormInput
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
