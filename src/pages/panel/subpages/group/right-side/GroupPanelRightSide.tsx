import styles from "./groupPanelRightSide.module.css"
import useGroupsPanel from "../../../../../features/panel/group/useGroupsPanel.ts";
import OfferCard from "../../../right-panel/offer-card/OfferCard.tsx";
import PanelGallery from "../../../right-panel/panel-gallery/PanelGallery.tsx";
import Person from "./Person.tsx";

const GroupPanelRightSide = () => {
    const {offerPreviews, selectedGroup} = useGroupsPanel();

    return selectedGroup ? (
        <div className={styles.rightMenu}>
            <div className={styles.header}>
                <h2>{selectedGroup.name}</h2>
                <h3>Пользователи</h3>
                <div className={styles.people}>
                    {selectedGroup.accesses.map(item => <Person key={item.accountId} name={item.name} role={item.role} email={item.email}/>)}
                </div>
            </div>
            <div className={styles.offers}>
                <h3>Офферы</h3>
                <PanelGallery onScroll={() => {}}>
                    {offerPreviews.map(item => <OfferCard key={item.id} {...item}/>)}
                </PanelGallery>
            </div>
        </div>
    ) : <div className={styles.empty}>
        <h3>Выберите группу</h3>
    </div>
}
export default GroupPanelRightSide
