import HeaderPanel from "../../right-panel/header-panel/HeaderPanel.tsx";
import Filtres from "../../right-panel/header-panel/filtres/Filtres.tsx";
import RoleFilterBlock from "../../right-panel/header-panel/filtres/RoleFilterBlock.tsx";
import styles from "./groupPanelSubpage.module.css";
import PanelGallery from "../../right-panel/panel-gallery/PanelGallery.tsx";
import usePanel from "../../../../features/panel/usePanel.ts";
import GroupCard from "../../right-panel/offer-card/GroupCard.tsx";
import GroupPanelRightSide from "./right-side/GroupPanelRightSide.tsx";

const GroupPanelSubpage = () => {
    const {groupAccesses} = usePanel();
    return (
        <div className={styles.page}>
            <div className={styles.leftMenu}>
                <HeaderPanel name={"Группы"}/>
                <Filtres filtres={<RoleFilterBlock/>}/>
                <PanelGallery>
                    {groupAccesses.map(item => <GroupCard id={item.groupId} image={item.image} key={item.groupId} name={item.name} role={item.role.name}/>)}
                </PanelGallery>
            </div>
            <GroupPanelRightSide/>
        </div>
    )
}
export default GroupPanelSubpage
