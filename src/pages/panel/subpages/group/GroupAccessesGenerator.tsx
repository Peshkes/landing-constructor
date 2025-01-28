import GroupCard from "../../right-panel/offer-card/GroupCard.tsx";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import styles from "./groupAccessesGenerator.module.css";

const GroupAccessesGenerator = () => {
    const groupAccesses = useGroupsPanel(state => state.groupAccesses);
    return groupAccesses.length > 0 ? (
        <>
            {groupAccesses.map(item =>
                <GroupCard id={item.groupId} image={item.image} key={item.groupId}
                           name={item.name} role={item.role.name}/>
            )}
        </>
    ) : (
        <h3 className={styles.emptyHeader}>Нет групп</h3>
    )
}
export default GroupAccessesGenerator
