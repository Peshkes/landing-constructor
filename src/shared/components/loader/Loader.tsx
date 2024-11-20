import styles from "./loader.module.css";

type LoaderProps = {
    backgroundBlur?: boolean,
    spinnerColor?: string
}

const Loader = ({backgroundBlur = false, spinnerColor}: LoaderProps) => {
    return (
        <div className={styles.loader + " " + (backgroundBlur ? styles.backgroundBlur : "")}>
            <div style={spinnerColor ? { borderColor: spinnerColor} : {}} className={styles.spinner}></div>
        </div>
    );
};

export default Loader;
