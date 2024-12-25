import {ReactNode} from "react";
import styles from "./sideContentMenuBody.module.css"

const SideContentMenuBody = ({children}: { children?: ReactNode }) => {
    if (!children)
        return <div className={styles.empty}>Блок не выбран</div>
    else
        return (
            <div className={styles.settingsBody}>
                {children}
            </div>
        )
}
export default SideContentMenuBody
