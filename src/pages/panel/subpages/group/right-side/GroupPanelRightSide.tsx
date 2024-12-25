import styles from "./groupPanelRightSide.module.css"
import usePanel from "../../../../../features/panel/usePanel.ts";
import OfferCard from "../../../right-panel/offer-card/OfferCard.tsx";
import PanelGallery from "../../../right-panel/panel-gallery/PanelGallery.tsx";
import Person from "./Person.tsx";

const GroupPanelRightSide = () => {
    const {offerPreviews, selectedGroup} = usePanel();
    return (
        <div className={styles.rightMenu}>
            <div className={styles.header}>
                <h2>{selectedGroup.name}</h2>
                <h3>Пользователи</h3>
                <div className={styles.people}>
                    {selectedGroup.accesses.map(item => <Person key={item.accountId} id={item.accountId} name={item.name} role={item.role}/>)}
                </div>
            </div>
            <div className={styles.offers}>
                <h3>Офферы</h3>
                <PanelGallery>
                    {offerPreviews.map(item => <OfferCard key={item.id} {...item}/>)}
                </PanelGallery>
            </div>
        </div>
    )
}
export default GroupPanelRightSide
