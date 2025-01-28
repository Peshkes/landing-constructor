import styles from './form.module.css';
import {FieldValues, useForm} from 'react-hook-form';
import {ReactNode} from "react";
import FormButton from "../../../shared/ui/form-button/FormButton.tsx";

type FormProps = {
    isSubmitting: boolean;
    onSubmit: (data: FieldValues) => void;
    handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
    children: ReactNode;
};

const AuthForm = ({ isSubmitting, onSubmit, handleSubmit, children }: FormProps) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {children}
            <FormButton isSubmitting={isSubmitting}/>
        </form>
    );
};

export default AuthForm;
