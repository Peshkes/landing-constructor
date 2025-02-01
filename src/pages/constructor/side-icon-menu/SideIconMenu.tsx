import style from "./sideIconMenu.module.css";
import {ReactNode} from "react";

type Props = {
    topNodes?: ReactNode;
    bottomNodes?: ReactNode;
};

const SideIconMenu = ({topNodes, bottomNodes}: Props) => {
    return (
        <div className={style.block}>
            { topNodes && <div>{topNodes}</div>}
            { bottomNodes && <div>{bottomNodes}</div>}
        </div>
    );
};

export default SideIconMenu;
