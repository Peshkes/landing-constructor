import FormInput from "../../../../../shared/ui/form-input/FormInput.tsx";
import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {addGroupValidationSchema} from "./addGroupValidation.ts";
import {GroupApi} from "../../../../../features/panel/group/GroupApi.ts";
import useGroupsPanel from "../../../../../features/panel/group/useGroupsPanel.ts";
import {MessageType} from "../../../../../shared/components/modal/useModal.tsx";
import ModalForm from "../../../../../shared/components/modal-form/ModalForm.tsx";

const AddGroupForm = ({closeModal}: {closeModal: () => void}) => {
    const fetchGroups = useGroupsPanel(state => state.resetPageAndFetch);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(addGroupValidationSchema),
    });

    const onSubmit = (openMessage: (message: string, type: MessageType) => void ,data: FieldValues) => {
        GroupApi.createGroup(data.name)
            .then(() => {
                fetchGroups();
                closeModal();
            })
            .catch((error) => openMessage('Не удалось добавить группу ' + error, 'error'));
    };

    return (
        <ModalForm title={"Создать группу"} onSubmit={onSubmit} handleSubmit={handleSubmit} isSubmitting={isSubmitting}>
            <FormInput id="name" label={"Название"} type="text" register={register} error={errors.name}/>
        </ModalForm>
    );
};

export default AddGroupForm;
