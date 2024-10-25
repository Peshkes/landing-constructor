import {useState} from "react";
import LayersButton from "../../../shared/components/LayersButton.tsx";
import SettingsButton from "../../../shared/components/SettingsButton.tsx";
import SettingsContent from "./settings-content/SettingsContent.tsx";
import ArchitectureContent from "./architecture-content/ArchitectureContent.tsx";
import SideIconMenu from "../side-icon-menu/SideIconMenu.tsx";
import SideContentMenu from "../side-content-menu/SideContentMenu.tsx";

const RightMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (button: string) => {
        if (activeButton === button) {
            setIsOpen(false);
            setActiveButton(null);
        } else {
            setActiveButton(button);
            setIsOpen(true);
        }
    };

    return (
        <div className={'sidebar'}>
            <SideContentMenu side={"right"} isOpen={isOpen} minWidth={200} maxWidth={400}>
                {activeButton === 'settings' && <SettingsContent/>}
                {activeButton === 'architecture' && <ArchitectureContent/>}
            </SideContentMenu>
            <SideIconMenu>
                <LayersButton onClick={() => handleButtonClick('architecture')} isOpen={isOpen && activeButton === 'architecture'} />
                <SettingsButton onClick={() => handleButtonClick('settings')} isOpen={isOpen && activeButton === 'settings'} />
            </SideIconMenu>
        </div>
    );
};

export default RightMenu;
