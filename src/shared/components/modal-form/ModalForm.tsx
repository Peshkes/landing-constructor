import useModal, {MessageType} from "../modal/useModal.tsx";
import styles from "../../../pages/panel/subpages/offers/add-offer/addOfferForm.module.css";
import {BaseSyntheticEvent, ReactNode} from "react";
import {FieldValues} from "react-hook-form";
import FormButton from "../../ui/form-button/FormButton.tsx";

type Props = {
    title: string
    handleSubmit: (callback: (data: FieldValues) => void) => (event?: BaseSyntheticEvent) => void;
    onSubmit: (openMessage: (message: string, type: MessageType) => void, data: FieldValues) => void;
    isSubmitting: boolean
    children: ReactNode
}

const ModalForm = ({title, onSubmit, handleSubmit, isSubmitting, children}: Props) => {
    const {Modal, isOpen, openMessage} = useModal();

    return (
        <form className={styles.form} onSubmit={handleSubmit((data) => onSubmit(openMessage, data))}>
            <h2>{title}</h2>
            {children}
            <FormButton isSubmitting={isSubmitting}/>
            {isOpen && <Modal/>}
        </form>
    );
};

export default ModalForm
