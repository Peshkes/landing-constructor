import SettingsInput, {SettingsInputProps} from "../../shared/components/settings/settings-input/SettingsInput.tsx";
import {FC} from "react";
import ColorPickerInput from "../../shared/components/settings/color-picker-input/ColorPickerInput.tsx";

export const draggableTypes = {
    STRUCTURE_ITEM_TYPE: "StructureItemBlock",
    CONSTRUCTION_BLOCKS: "ConstructionBlocks",
}

export const constructorSettingsInputs: Record<string, FC<SettingsInputProps>> = {
    title: SettingsInput,
    backgroundColor: ColorPickerInput,
    textColor: ColorPickerInput,
    image: SettingsInput,
};
