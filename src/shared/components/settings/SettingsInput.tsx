import {ReactNode} from "react";
import SettingsInputBase from "./settings-input-base/SettingsInputBase.tsx";

export type SettingsInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    children?: ReactNode;
};

const SettingsInput = ({ label, value, onChange, children }: SettingsInputProps) => {
    return (
        <SettingsInputBase
            label={label}
            value={value}
            onChange={onChange}
            inputElement="input"
        >
            {children}
        </SettingsInputBase>
    );
};

export default SettingsInput;
