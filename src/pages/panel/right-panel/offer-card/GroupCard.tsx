import styles from "./cards.module.css"
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";

type Props = {
    group_id: string
    image: string
    name: string
    role: string
}

const GroupCard = ({group_id, image, name, role}: Props) => {
    const selectGroup = useGroupsPanel(state => state.selectGroup);
    const selectedGroupId = useGroupsPanel(state => state.selectedGroupId);

    return (
        <div onClick={() => selectGroup(group_id)}
             className={`${styles.card} ${selectedGroupId === group_id ? styles.active : ""} ${role && styles[role]}`}
        >
            <img src={image} alt="offer"/>
            <div className={styles.centerHeader}>
                <h3>{name}</h3>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.badge}>{role}</div>
            </div>
        </div>
    )
}

export default GroupCard
