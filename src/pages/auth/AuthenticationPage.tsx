import styles from "./authenticationPage.module.css";
import LeftBlock from "./left-block/LeftBlock.tsx";

const AuthenticationPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.block}>
                <div className={styles.leftBlock}>
                    <LeftBlock/>
                </div>
                <div className={styles.rightBlock}>
                    <img src="..." alt="logo"/>
                </div>
            </div>
        </div>

    );
};

export default AuthenticationPage;
