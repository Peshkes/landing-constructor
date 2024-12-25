import styles from "./filtres.module.css"
import {ReactNode} from "react";

type Props = {
    filtres?: ReactNode
    sorting?: ReactNode
}

const Filtres = ({filtres, sorting}: Props) => {
    return (
        <div className={styles.block}>
            <div className={styles.filters}>
                {filtres}
            </div>
            <div className={styles.sorting}>
                {sorting}
            </div>
        </div>
    )
}
export default Filtres
