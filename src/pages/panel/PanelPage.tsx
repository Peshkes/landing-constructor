import styles from "./panelPage.module.css";
import LeftPanel from "./left-panel/LeftPanel.tsx";
import RightPanel from "./right-panel/RightPanel.tsx";

const PanelPage = () => {
    return (
        <div className={"page " + styles.page}>
            <LeftPanel/>
            <RightPanel/>
        </div>
    );
};

export default PanelPage;
