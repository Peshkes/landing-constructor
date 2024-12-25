import React, { useEffect, useState } from "react";
import SettingsLabel from "../settings-label/SettingsLabel.tsx";
import styles from "./settingsInput.module.css";

type SettingsInputBaseProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    inputElement: React.ElementType;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};

const SettingsInputBase = ({ label, value, onChange, children, inputElement: InputElement, style }: SettingsInputBaseProps) => {
    const [inputValue, setInputValue] = useState(value);
    const refTimer = React.useRef<any>(null);

    useEffect(() => {
        if (inputValue !== value) {
            setInputValue(value);
        }
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        clearTimeout(refTimer.current);
        refTimer.current = setTimeout(() => {
            onChange(e.target.value);
        }, 800);
    };

    return (
        <SettingsLabel label={label} style={style}>
            <div className={styles.inputContainer}>
                <InputElement
                    className={styles.input}
                    onChange={handleInputChange}
                    value={inputValue}
                />
            </div>
            {children}
        </SettingsLabel>
    );
};

export default SettingsInputBase;
