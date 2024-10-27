import SideContentMenu from "../side-content-menu/SideContentMenu.tsx";
import SideIconMenu from "../side-icon-menu/SideIconMenu.tsx";
import {useState} from "react";
import SettingsContent from "./SettingsContent.tsx";
import LibraryContent from "./LibraryContent.tsx";
import LayersButton from "../../../shared/components/LayersButton.tsx";
import SettingsButton from "../../../shared/components/SettingsButton.tsx";

const LeftMenu = () => {
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
            <SideIconMenu>
                <LayersButton onClick={() => handleButtonClick('architecture')} isOpen={isOpen && activeButton === 'architecture'} />
                <SettingsButton onClick={() => handleButtonClick('settings')} isOpen={isOpen && activeButton === 'settings'} />
            </SideIconMenu>
            <SideContentMenu side={"left"} isOpen={isOpen} minWidth={200} maxWidth={600} defaultWidth={300}>
                {activeButton === 'settings' && <SettingsContent/>}
                {activeButton === 'architecture' && <LibraryContent/>}
            </SideContentMenu>
        </div>
    );
};

export default LeftMenu;
