import SettingsInput, {SettingsInputProps} from "../../shared/components/settings/SettingsInput.tsx";
import {FC} from "react";
import ColorPickerInput from "../../shared/components/settings/color-picker-input/ColorPickerInput.tsx";
import SettingsCodeInput from "../../shared/components/settings/SettingsCodeInput.tsx";

export const draggableTypes = {
    STRUCTURE_ITEM_TYPE: "StructureItemBlock",
    CONSTRUCTION_BLOCKS: "ConstructionBlocks",
}

export const constructorBlockSettingsInputs: Record<string, FC<SettingsInputProps>> = {
    title: SettingsInput,
    backgroundColor: ColorPickerInput,
    textColor: ColorPickerInput,
    image: SettingsInput,
};

export const constructorPageSettingsInputs: Record<string, FC<SettingsInputProps>> = {
    backgroundColor: ColorPickerInput,
    customPageCss: SettingsCodeInput,
    customContentCss: SettingsCodeInput,
};
