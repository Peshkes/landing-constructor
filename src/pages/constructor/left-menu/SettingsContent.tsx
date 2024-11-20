import SideHeader from "../side-header/SideHeader.tsx";
import SettingsBody from "./settings/SettingsBody.tsx";

const SettingsContent = () => {
    return (
        <div className={"h-100 relative"}>
            <SideHeader text={"Настройки блока"}/>
            <SettingsBody/>
        </div>
    );
};

export default SettingsContent;
