import SideHeader from "../../side-header/SideHeader.tsx";
import ConstructorSettingsBody from "./ConstructorSettingsBody.tsx";

const BlockSettingsContent = () => {
    return (
        <div className={"h-100 relative"}>
            <SideHeader text={"Настройки конструктора"}/>
            <ConstructorSettingsBody/>
        </div>
    );
};

export default BlockSettingsContent;
