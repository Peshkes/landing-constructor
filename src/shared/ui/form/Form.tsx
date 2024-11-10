import styles from './form.module.css';
import {FieldValues, useForm} from 'react-hook-form';
import {ReactNode} from "react";

type FormProps = {
    isSubmitting: boolean;
    onSubmit: (data: FieldValues) => void;
    handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
    children: ReactNode;
};

const Form = ({ isSubmitting, onSubmit, handleSubmit, children }: FormProps) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {children}
            <button
                type="submit"
                className={`${styles.submitButton} ${isSubmitting ? styles.disabledButton : ''}`}
                disabled={isSubmitting}
            >
                Отправить
            </button>
        </form>
    );
};

export default Form;
