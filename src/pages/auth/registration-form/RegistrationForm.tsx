import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationValidationSchema} from "./registrationValidation.ts";
import Input from "../../../shared/ui/input/Input.tsx";
import Form from "../../../shared/ui/form/Form.tsx";

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
        <Form
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
        >
            <Input
                id="name"
                label="Имя пользователя"
                register={register}
                error={errors.name}
            />
            <Input
                id="email"
                label="Электронная почта"
                type="email"
                register={register}
                error={errors.email}
            />
            <Input
                id="password"
                label="Пароль"
                type="password"
                register={register}
                error={errors.password}
            />
            <Input
                id="confirmPassword"
                label="Подтвердите пароль"
                type="password"
                register={register}
                error={errors.confirmPassword}
            />
        </Form>
    );
};

export default RegistrationForm;
