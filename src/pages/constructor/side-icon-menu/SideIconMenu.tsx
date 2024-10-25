import style from "./sideIconMenu.module.css";
import {ReactNode} from "react";

const SideIconMenu = ({children}: {children: ReactNode}) => {
    return (
        <div className={style.block}>
            {children}
        </div>
    );
};

export default SideIconMenu;
