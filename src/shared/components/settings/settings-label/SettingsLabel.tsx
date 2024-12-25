import React, {ReactNode} from "react";
import styles from "./settingsLabel.module.css"

type SettingsLabelProps = {
    label: string
    style?: React.CSSProperties;
    children?: ReactNode
}

const SettingsLabel = ({label, style, children}: SettingsLabelProps) => {
    return (
        <label className={styles.label} style={style}>
            {label}
            {children}
        </label>
    )
}

export default SettingsLabel
