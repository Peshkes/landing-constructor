import styles from "./addGroupForm.module.css";
import FormInput from "../../../../../shared/ui/form-input/FormInput.tsx";
import FormButton from "../../../../../shared/ui/form-button/FormButton.tsx";
import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addGroupValidationSchema} from "./addGroupValidation.ts";
import {GroupApi} from "../../../../../features/panel/group/GroupApi.ts";
import useAuthentication from "../../../../../features/authentication/useAuthentication.ts";
import useGroupsPanel from "../../../../../features/panel/group/useGroupsPanel.ts";
import useModal from "../../../../../shared/components/modal/useModal.tsx";

const AddGroupForm = () => {
    const user = useAuthentication(state => state.user);
    const fetchGroups = useGroupsPanel(state => state.fetchGroups);
    const {Modal, isOpen, openMessage, closeModal} = useModal();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(addGroupValidationSchema),
    });

    const onSubmit = (data: FieldValues) => {
        GroupApi.createGroup(user!._id, data.name)
            .then(() => {
                fetchGroups(user!._id);
                closeModal();
            })
            .catch((error) => openMessage('Не удалось добавить группу ' + error, 'error'));
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Добавить группу</h2>
            <FormInput id="name" label={"Название"} type="text" register={register} error={errors.name}/>
            <FormButton isSubmitting={isSubmitting}/>
            {isOpen && <Modal/>}
        </form>
    );
};

export default AddGroupForm;
