import {ReactNode} from "react";
import styles from "./settingsLabel.module.css"

type SettingsLabelProps = {
    label: string
    children?: ReactNode
}

const SettingsLabel = ({label, children}: SettingsLabelProps) => {
    return (
        <label className={styles.label}>
            {label}
            {children}
        </label>
    )
}

export default SettingsLabel
