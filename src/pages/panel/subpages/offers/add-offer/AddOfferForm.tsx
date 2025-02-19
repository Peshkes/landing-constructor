import FormInput from "../../../../../shared/ui/form-input/FormInput.tsx";
import {FieldValues, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {MessageType} from "../../../../../shared/components/modal/useModal.tsx";
import ModalForm from "../../../../../shared/components/modal-form/ModalForm.tsx";
import {addOfferValidationSchema} from "./addOfferValidation.ts";
import {OfferApi} from "../../../../../features/panel/offers/OfferApi.ts";
import {useState} from "react";
import FormTwoValuesSelector from "../../../../../shared/components/form-two-values-selector/FormTwoValuesSelector.tsx";

type Props = {
    fetch: () => void
    closeModal: () => void
}

const AddOfferForm = ({closeModal, fetch}: Props) => {
    const [isGroup, setIsGroup] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm({
        resolver: yupResolver(addOfferValidationSchema),
    });

    const onSubmit = (openMessage: (message: string, type: MessageType) => void, data: FieldValues) => {
        OfferApi.createOffer(data.name)
            .then(() => {
                fetch();
                closeModal();
            })
            .catch((error) => openMessage('Не удалось добавить оффер ' + error, 'error'));
    };

    return (
        <ModalForm title="Создать оффер" onSubmit={onSubmit} handleSubmit={handleSubmit} isSubmitting={isSubmitting}>
            <FormInput id="name" label={"Название"} type="text" register={register} error={errors.name}/>
            <FormTwoValuesSelector value={isGroup} onChange={setIsGroup} falseValue={"Я"} trueValue={"Группа"}/>
        </ModalForm>
    );
};

export default AddOfferForm;
