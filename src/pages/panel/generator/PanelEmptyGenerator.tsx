import {ReactNode} from "react";
import Loader from "../../../shared/components/loader/Loader.tsx";
import styles from "./panelEmptyGenerator.module.css";

type Props = {
    children: ReactNode,
    dataArray: any[],
    isLoading: boolean,
    emptyMessage: string
}

const GroupAccessesGenerator = ({children, dataArray, isLoading, emptyMessage}: Props) => {

    return dataArray.length > 0 ? (
        <>
            {children}
            {isLoading && <div className={styles.loader}><Loader backgroundBlur={false} isLocal={true} backgroundColor={"transparent"}/></div>}
        </>
    ) : (
        <h3 className={styles.emptyHeader}>{emptyMessage}</h3>
    )
}
export default GroupAccessesGenerator
