import {CSSProperties, ReactNode} from "react";
import styles from './menuButton.module.css';

type Props = {
    onClick: () => void;
    children: ReactNode;
    style?: CSSProperties;
    isOpen?: boolean;
    size?: number;
    disabled?: boolean;
}

const MenuButton = ({ isOpen = false, onClick, size, style, disabled, children }: Props) => {
    const combinedStyle: CSSProperties = {
        ...style,
        ...(size ? { width: size, height: size } : { paddingLeft: "15px", paddingRight: "15px" }),
    };

    return (
        <button disabled={disabled} style={combinedStyle} onClick={onClick} className={`${styles.button} ${isOpen ? styles.open : ''} ${disabled ? styles.disabled : ''}`}>
            {children}
        </button>
    );
};

export default MenuButton;
