import {ReactNode} from "react";
import style from "./sideContentBody.module.css";

const SideContentBody = ({children}: {children: ReactNode}) => {
    return (
        <div className={style.body}>
            {children}
        </div>
    );
};

export default SideContentBody;
