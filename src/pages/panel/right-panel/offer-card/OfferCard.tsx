import {OfferPreview} from "../../../../features/panel/types.ts";
import styles from "./cards.module.css"
import {useNavigate} from "react-router-dom";

const OfferCard = ({id, image, name, status, views, expirationDate}: OfferPreview) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/constructor/${id}`)} className={styles.card + " " + styles[status]}>
            <img src={image} alt="offer"/>
            <div className={styles.centerHeader}>
                <h3>{name}</h3>
            </div>
            <div className={styles.rightBlock}>
                {status !== "draft" && expirationDate && views && <p>Просмотры: {views}</p>}
                <div className={styles.badge}>{status}</div>
                {status !== "draft" && expirationDate && views && <p>До: {expirationDate.toLocaleDateString()}</p>}
            </div>
        </div>
    )
}
export default OfferCard
