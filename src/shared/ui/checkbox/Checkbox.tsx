import styles from "./ios-checkbox.module.css";

export type Props = {
    value: boolean;
    onChange: (value: boolean) => void;
};

const Checkbox = ({value, onChange}: Props) => {
    return (
        <div className={styles.switchContainer} onClick={() => onChange(!value)}>
            <div className={`${styles.switch} ${value ? styles.checked : ""}`}>
                <div className={styles.toggle}></div>
            </div>
        </div>
    )
}
export default Checkbox
