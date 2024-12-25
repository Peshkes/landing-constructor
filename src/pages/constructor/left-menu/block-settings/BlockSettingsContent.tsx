import SideHeader from "../../side-header/SideHeader.tsx";
import BlockSettingsBody from "./BlockSettingsBody.tsx";

const BlockSettingsContent = () => {
    return (
        <div className={"h-100 relative"}>
            <SideHeader text={"Настройки блока"}/>
            <BlockSettingsBody/>
        </div>
    );
};

export default BlockSettingsContent;
