import styles from "./loader.module.css";

type LoaderProps = {
    backgroundBlur?: boolean,
    spinnerColor?: string
    isLocal?: boolean
    backgroundColor?: string
}

const Loader = ({backgroundBlur = false, spinnerColor, isLocal = false, backgroundColor}: LoaderProps) => {
    return (
        <div style={backgroundColor ? {backgroundColor} : {}} className={`${styles.loader} ${isLocal ? styles.local : ""} ${backgroundBlur ? styles.backgroundBlur : ""}`}>
            <div style={spinnerColor ? { borderColor: spinnerColor} : {}} className={styles.spinner}></div>
        </div>
    );
};

export default Loader;
