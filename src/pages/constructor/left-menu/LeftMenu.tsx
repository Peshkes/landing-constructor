import SideContentMenu from "../side-content-menu/SideContentMenu.tsx";
import SideIconMenu from "../side-icon-menu/SideIconMenu.tsx";
import {useState} from "react";
import BlockSettingsContent from "./block-settings/BlockSettingsContent.tsx";
import LibraryContent from "./library-menu/LibraryContent.tsx";
import LayersButton from "../../../shared/components/buttons/LayersButton.tsx";
import SettingsButton from "../../../shared/components/buttons/SettingsButton.tsx";
import PageSettingsButton from "../../../shared/components/buttons/PageSettingsButton.tsx";
import PageSettingsContent from "./page-settings/PageSettingsContent.tsx";
import GearButton from "../../../shared/components/buttons/GearButton.tsx";
import ConstructorSettingsContent from "./constructor-settings/ConstructorSettingsContent.tsx";

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
            <SideIconMenu topNodes={
                <>
                    <LayersButton onClick={() => handleButtonClick('architecture')}
                                  isOpen={isOpen && activeButton === 'architecture'}/>
                    <SettingsButton onClick={() => handleButtonClick('block-settings')}
                                    isOpen={isOpen && activeButton === 'block-settings'}/>
                    <PageSettingsButton onClick={() => handleButtonClick('page-settings')}
                                        isOpen={isOpen && activeButton === 'page-settings'}/>
                </>
            } bottomNodes={
                <GearButton onClick={() => handleButtonClick('constructor-settings')}
                              isOpen={isOpen && activeButton === 'constructor-settings'}/>
            }
            />
            <SideContentMenu side={"left"} isOpen={isOpen} minWidth={200} maxWidth={600} defaultWidth={300}>
                {activeButton === 'block-settings' && <BlockSettingsContent/>}
                {activeButton === 'page-settings' && <PageSettingsContent/>}
                {activeButton === 'architecture' && <LibraryContent/>}

                {activeButton === 'constructor-settings' && <ConstructorSettingsContent/>}
            </SideContentMenu>
        </div>
    );
};

export default LeftMenu;
