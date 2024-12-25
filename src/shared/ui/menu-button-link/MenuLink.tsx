import { CSSProperties, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from './menuButton.module.css';

type Props = {
    to: string;
    children: ReactNode;
    style?: CSSProperties;
    isOpen?: boolean;
    size?: number;
};

const MenuLink = ({ to, isOpen = false, size, style, children }: Props) => {
    const combinedStyle: CSSProperties = {
        ...style,
        ...(size ? { width: size, height: size } : { paddingLeft: "15px", paddingRight: "15px" }),
    };

    return (
        <NavLink
            to={to}
            end={true}
            style={({ isActive }) => ({
                ...combinedStyle,
                backgroundColor: isActive ? 'var(--background-color-4)' : undefined,
            })}
            className={`${styles.button} ${isOpen ? styles.open : ''}`}
        >
            {children}
        </NavLink>
    );
};

export default MenuLink;
