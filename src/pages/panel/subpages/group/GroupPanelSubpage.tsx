import HeaderPanel from "../../right-panel/header-panel/HeaderPanel.tsx";
import Filtres from "../../right-panel/header-panel/filtres/Filtres.tsx";
import styles from "./groupPanelSubpage.module.css";
import GroupPanelRightSide from "./right-side/GroupPanelRightSide.tsx";
import GroupAccessesGallery from "./GroupAccessesGallery.tsx";
import useModal from "../../../../shared/components/modal/useModal.tsx";
import AddGroupForm from "./add-group/AddGroupForm.tsx";
import useGroupsPanel from "../../../../features/panel/group/useGroupsPanel.ts";
import {useEffect} from "react";
import GroupRoleFilter from "./GroupRoleFilter.tsx";

const GroupPanelSubpage = () => {
    const resetPageAndFetch = useGroupsPanel((state) => state.resetPageAndFetch);
    const {openModal, Modal, isOpen, closeModal} = useModal();

    useEffect(resetPageAndFetch, [resetPageAndFetch]);

    return (
        <div className={styles.page}>
            <div className={styles.leftMenu}>
                <HeaderPanel name={"Группы"} onClick={openModal}/>
                <Filtres filtres={<GroupRoleFilter/>}/>
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
