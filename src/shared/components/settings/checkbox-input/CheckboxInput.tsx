import SettingsLabel from "../settings-label/SettingsLabel.tsx";
import Checkbox from "../../../ui/checkbox/Checkbox.tsx";
import styles from "./checkboxInput.module.css";

export type SettingsInputProps = {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
};

const CheckboxInput = ({ label, value, onChange }: SettingsInputProps) => {
    return (
        <SettingsLabel label={label}>
            <div className={styles.container}>
                <Checkbox value={value} onChange={onChange}/>
            </div>
        </SettingsLabel>
    );
};

export default CheckboxInput;
