import styles from "./headerPanel.module.css";
import MenuButton from "../../../../shared/ui/menu-button-link/MenuButton.tsx";
import SVG from "../../../../shared/images/icons/add.svg";
import {ReactNode} from "react";

type Props = {
    name: string,
    onClick: () => void
    children?: ReactNode
}

const HeaderPanel = ({name, onClick, children}: Props) => {
    return (
        <div className={styles.header}>
            <div>
                <h2>{name}</h2>
                <MenuButton onClick={onClick} size={44}>
                    <img src={SVG} alt="добавить"/>
                </MenuButton>
            </div>
            {children}
        </div>
    );
};

export default HeaderPanel;
