import SideHeader from "../../side-header/SideHeader.tsx";
import PageSettingsBody from "./PageSettingsBody.tsx";

const PageSettingsContent = () => {
    return (
        <div className={"h-100 relative"}>
            <SideHeader text={"Настройки страницы"}/>
            <PageSettingsBody/>
        </div>
    )
}
export default PageSettingsContent
