import styles from "./rightPanel.module.css"
import PanelRouter from "../../../app/routes/PanelRouter.tsx";

const RightPanel = () => {
    return (
        <div className={styles.panel}>
            <PanelRouter/>
        </div>
    )
}
export default RightPanel
