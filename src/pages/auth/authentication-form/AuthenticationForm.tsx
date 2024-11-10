import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {authenticationValidationSchema} from "./authenticationValidation.ts";
import Form from "../../../shared/ui/form/Form.tsx";
import Input from "../../../shared/ui/input/Input.tsx";

const AuthenticationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(authenticationValidationSchema),
    });

    const onSubmit = (data: FieldValues) => {
        console.log('Авторизационные данные:', data);
    };
    return (
        <Form
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
        >
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
        </Form>
    );
};

export default AuthenticationForm;
