import styles from "./groupPanelRightSide.module.css"
import useGroupsPanel from "../../../../../features/panel/group/useGroupsPanel.ts";
import Person from "./Person.tsx";

const GroupPanelRightSide = () => {
    const {selectedGroupData, selectedGroupId} = useGroupsPanel();

    if (!selectedGroupData) {
        return (
            <div className={styles.empty}>
                <h3>{selectedGroupId ? "Загрузка" : "Выбериту группу"}</h3>
            </div>
        )
    }

    return (
        <>
            <div className={styles.rightMenu}>
                <div className={styles.header}>
                    <h2>{selectedGroupData.name}</h2>
                    <h3>Пользователи</h3>
                    <div className={styles.people}>
                        {selectedGroupData.groupAccesses.map(item => <Person key={item.accountId} name={item.name}
                                                                        role={item.role} email={item.email}/>)}
                    </div>
                </div>
                <div className={styles.offers}>
                    <h3>Офферы</h3>
                    {/*<PanelGallery onScroll={() => {*/}
                    {/*}}>*/}
                    {/*    /!*{selectedGroupData.draftOffers.map(item => <OfferCard key={item.id} {...item}/>)}*!/*/}
                    {/*</PanelGallery>*/}
                </div>
            </div>
        </>
    )
}
export default GroupPanelRightSide
