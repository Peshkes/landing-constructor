import styles from "./cards.module.css"
import {useNavigate} from "react-router-dom";

type Props = {
    id: string
    image: string
    name: string
    role: string
}

const GroupCard = ({id, image, name, role}: Props) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/panel/groups/${id}`)} className={styles.card + " " + styles[role]}>
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
