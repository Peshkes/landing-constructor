import {SettingsInputProps} from "./SettingsInput.tsx";
import SettingsInputBase from "./settings-input-base/SettingsInputBase.tsx";

const SettingsCodeInput = ({ label, value, onChange }: SettingsInputProps) => {
    return (
        <SettingsInputBase
            label={label}
            value={value}
            onChange={onChange}
            style={{flexDirection: "column", justifyContent: "start", alignItems: "start"}}
            inputElement="textarea"
        />
    );
};

export default SettingsCodeInput
