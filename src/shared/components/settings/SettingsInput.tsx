import {ReactNode} from "react";
import SettingsInputBase from "./settings-input-base/SettingsInputBase.tsx";

export type SettingsInputProps = {
    label: string;
    value: any;
    onChange: (value: any) => void;
    type?: string;
    children?: ReactNode;
};

const SettingsInput = ({ label, value, onChange, type, children }: SettingsInputProps) => {
    return (
        <SettingsInputBase
            label={label}
            value={value}
            onChange={onChange}
            inputElement="input"
            type={type}
        >
            {children}
        </SettingsInputBase>
    );
};

export default SettingsInput;
