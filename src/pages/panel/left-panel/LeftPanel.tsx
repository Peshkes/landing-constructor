import SideContentMenu from "../../constructor/side-content-menu/SideContentMenu.tsx";
import styles from "./leftPanel.module.css";
import LeftPanelContent from "./LeftPanelContent.tsx";


const LeftPanel = () => {
    return (
        <div className={styles.panel}>
            <SideContentMenu side={"left"} isOpen={true} defaultWidth={300} maxWidth={400} minWidth={200}>
                <LeftPanelContent/>
            </SideContentMenu>
        </div>
    )
}
export default LeftPanel
