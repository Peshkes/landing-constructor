import styles from "./settingsInput.module.css"
import React, { ReactNode, useEffect, useState } from "react";
import SettingsLabel from "../settings-label/SettingsLabel.tsx";

export type SettingsInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    children?: ReactNode;
};

const SettingsInput = ({ label, value, onChange, children }: SettingsInputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const refTimer = React.useRef<any>(null);

    useEffect(() => {
        if (inputValue !== value) {
            setInputValue(value);
        }
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        clearTimeout(refTimer.current);
        refTimer.current = setTimeout(() => {
            onChange(e.target.value);
        }, 800)
    };

    return (
        <SettingsLabel label={label}>
            <input
                className={styles.input}
                onChange={handleInputChange}
                value={inputValue}
            />
            {children}
        </SettingsLabel>
    );
};

export default SettingsInput;
