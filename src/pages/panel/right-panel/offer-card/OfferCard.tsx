import styles from "./cards.module.css"
import {useNavigate} from "react-router-dom";
import {OfferPreview} from "../../../../features/panel/offers/types.ts";

const OfferCard = ({id, image, name, status, views, expiration_date, draft_id}: OfferPreview) => {
    const navigate = useNavigate();
    const isPublished = status === "published";

    return (
        <div onClick={() => navigate(`/constructor/${id}`)} className={`${styles.card} ${styles[status]}`}>
            {isPublished && draft_id && <p className={styles.unpublishedChanges}>
                Есть неопубликованные изменения
            </p>}
            <img src={image} alt="offer"/>
            <div className={styles.centerHeader}>
                <h3>{name}</h3>
            </div>
            <div className={styles.rightBlock}>
                {isPublished && views && <p>Просмотры: {views}</p>}
                <div className={styles.badge}>{status}</div>
                {isPublished && expiration_date && views && <p>До: {expiration_date.toLocaleDateString()}</p>}
            </div>
        </div>
    )
}
export default OfferCard
