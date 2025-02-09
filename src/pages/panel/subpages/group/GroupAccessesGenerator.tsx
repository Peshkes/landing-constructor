import GroupCard from "../../right-panel/offer-card/GroupCard.tsx";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import styles from "./groupAccessesGenerator.module.css";
import Loader from "../../../../shared/components/loader/Loader.tsx";

const GroupAccessesGenerator = () => {
    const groupAccesses = useGroupsPanel(state => state.groupAccesses);
    const isLoading = useGroupsPanel(state => state.groupIsLoading);
    return groupAccesses.length > 0 ? (
        <>
            {groupAccesses.map(item =>
                <GroupCard group_id={item.group_id} image={item.image} key={item.group_id}
                           name={item.name} role={item.role}/>
            )}
            {isLoading && <div className={styles.loader}><Loader backgroundBlur={false} isLocal={true} backgroundColor={"transparent"}/></div>}
        </>
    ) : (
        <h3 className={styles.emptyHeader}>Нет групп</h3>
    )
}
export default GroupAccessesGenerator
