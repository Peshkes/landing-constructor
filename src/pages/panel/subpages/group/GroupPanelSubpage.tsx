import HeaderPanel from "../../right-panel/header-panel/HeaderPanel.tsx";
import Filtres from "../../right-panel/header-panel/filtres/Filtres.tsx";
import RoleFilterBlock from "../../right-panel/header-panel/filtres/RoleFilterBlock.tsx";
import styles from "./groupPanelSubpage.module.css";
import GroupPanelRightSide from "./right-side/GroupPanelRightSide.tsx";
import GroupAccessesGallery from "./GroupAccessesGallery.tsx";
import useModal from "../../../../shared/components/modal/useModal.tsx";
import AddGroupForm from "./add-group/AddGroupForm.tsx";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";

const GroupPanelSubpage = () => {
    const {openModal, Modal, isOpen, closeModal} = useModal();
    const changeFilters = useGroupsPanel(state => state.changeFilters);

    return (
        <div className={styles.page}>
            <div className={styles.leftMenu}>
                <HeaderPanel name={"Группы"} onClick={openModal}/>
                <Filtres filtres={<RoleFilterBlock onChange={changeFilters}/>}/>
                <GroupAccessesGallery/>
            </div>
            <GroupPanelRightSide/>
            {isOpen && <Modal>
                <AddGroupForm closeModal={closeModal}/>
            </Modal>}
        </div>
    )
}
export default GroupPanelSubpage
