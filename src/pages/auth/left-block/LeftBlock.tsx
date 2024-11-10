import RegistrationForm from "../registration-form/RegistrationForm.tsx";
import {useState} from "react";
import styles from "./leftBlock.module.css";
import AuthenticationForm from "../authentication-form/AuthenticationForm.tsx";

const LeftBlock = () => {
    const [isReg, setIsReg] = useState(false);

    const handleClick = (bool: boolean) => {
        setIsReg(bool);
    }
    return (
        <div className={styles.leftBlock}>
            <h2><span onClick={()=>handleClick(true)} className={isReg ? styles.active : ''}>Регистрация</span> / <span onClick={()=>handleClick(false)} className={!isReg ? styles.active : ''}>Авторизация</span></h2>
            {isReg ? <RegistrationForm/> : <AuthenticationForm/>}
        </div>
    );
};

export default LeftBlock;
