import React, { useEffect, useState } from "react";
import SettingsLabel from "../settings-label/SettingsLabel.tsx";
import styles from "./settingsInput.module.css";

type SettingsInputBaseProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    inputElement: React.ElementType;
    disabled?: boolean;
    type?: string;
    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
    children?: React.ReactNode;
};

const SettingsInputBase = ({ label, value, onChange, children, inputElement: InputElement, style, disabled, inputStyle, type="string" }: SettingsInputBaseProps) => {
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
                    disabled={disabled}
                    type={type}
                    className={styles.input + " scrollbar_transparent" + (disabled ? " disabled" : "")}
                    onChange={handleInputChange}
                    value={inputValue}
                    style={inputStyle}
                />
            </div>
            {children}
        </SettingsLabel>
    );
};

export default SettingsInputBase;
