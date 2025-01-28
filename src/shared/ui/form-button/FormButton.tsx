import styles from "./formButton.module.css";

const FormButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
    return (
        <button
            type="submit"
            className={`${styles.submitButton} ${isSubmitting ? styles.disabledButton : ''}`}
            disabled={isSubmitting}
        >
            Отправить
        </button>
    );
};

export default FormButton;
