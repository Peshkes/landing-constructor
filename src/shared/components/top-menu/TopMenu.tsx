import style from "./topMenu.module.css";
import React from "react";

type Props = {
    leftMenu?: React.JSX.Element
    centerMenu?: React.JSX.Element
    rightMenu?: React.JSX.Element
}

const TopMenu = ({leftMenu, centerMenu, rightMenu}: Props) => {
    return (
        <div className={style.block}>
            <div className={style.left}>
                {leftMenu}
            </div>
            <div className={style.center}>
                {centerMenu}
            </div>
            <div className={style.right}>
                {rightMenu}
            </div>
        </div>
    );
};

export default TopMenu;
