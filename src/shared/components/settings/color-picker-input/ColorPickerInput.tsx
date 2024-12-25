import React, {useEffect, useState} from "react";
import ColorPicker from '@rc-component/color-picker';
import '@rc-component/color-picker/assets/index.css';
import SettingsInput, {SettingsInputProps} from "../SettingsInput.tsx";
import styles from "./colorPickerInput.module.css";

const ColorPickerInput = ({label, value, onChange}: SettingsInputProps) => {
    const [color, setColor] = useState(value);
    const [isPickerVisible, setPickerVisible] = useState<boolean>(false);
    const pattern = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6})$/;

    useEffect(() => {
        onChange(color);
    }, [color]);

    useEffect(() => {
        setColor(value);
    }, [value]);

    const handleTogglePicker = (event: React.MouseEvent) => {
        event.stopPropagation();
        setPickerVisible(!isPickerVisible);
    };

    return (
        <div className={styles.container}>
            <SettingsInput onChange={onChange} value={color} label={label}>
                <button
                    type="button"
                    className={styles.colorBlock}
                    style={{backgroundColor: color}}
                    onClick={handleTogglePicker}
                    title="Выбрать цвет"
                />
            </SettingsInput>
            {!pattern.test(color) && (
                <p className={styles.errorMessage}>Неправильный цвет: {color}</p>
            )}
            {isPickerVisible && (
                <div className={styles.pickerOverlay}>
                    <ColorPicker
                        value={color}
                        onChange={(color) => setColor(color.toHexString())}
                    />
                </div>
            )}
        </div>
    );
};

export default ColorPickerInput;
