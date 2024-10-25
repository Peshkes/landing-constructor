import {ReactNode} from "react";
import style from './menuButton.module.css';

type Props = {
    onClick: () => void;
    children: ReactNode;
    isOpen?: boolean;
    size?: number;
}

const MenuButton = ({ isOpen = false, onClick, size, children }: Props) => {
    return (
        <button style={size ? { width: size, height: size } : {padding: "0 15px"}} onClick={onClick} className={style.button + ` ${isOpen ? style.open : ''}`}>
            {children}
        </button>
    );
};

export default MenuButton;
