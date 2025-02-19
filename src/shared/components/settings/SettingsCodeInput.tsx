import SettingsInputBase from "./settings-input-base/SettingsInputBase.tsx";
import {CSSProperties} from "react";

type Props = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    inputStyle?: CSSProperties;
};

const SettingsCodeInput = ({ label, value, onChange, inputStyle, disabled }: Props) => {
    return (
        <SettingsInputBase
            disabled={disabled}
            label={label}
            value={value}
            onChange={onChange}
            style={{flexDirection: "column", justifyContent: "start", alignItems: "start"}}
            inputStyle={inputStyle}
            inputElement="textarea"
        />
    );
};

export default SettingsCodeInput
