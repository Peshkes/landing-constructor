import SideContentMenuBody from "../side-content-menu-body/SideContentMenuBody.tsx";
import useConstructorSettings from "../../../../features/constructor/useConstructorSettings.ts";
import CheckboxInput from "../../../../shared/components/settings/checkbox-input/CheckboxInput.tsx";
import SettingsInput from "../../../../shared/components/settings/SettingsInput.tsx";

const BlockSettingsBody = () => {
    const {flyMode, setFlyMode, workzonePadding, setWorkzonePadding} = useConstructorSettings();

    return (
        <SideContentMenuBody>
            <CheckboxInput label={"Fly Mode"} onChange={setFlyMode} value={flyMode}/>
            <SettingsInput label={"Padding"} value={workzonePadding} onChange={setWorkzonePadding} type={"number"}/>
        </SideContentMenuBody>
    );
};

export default BlockSettingsBody;
