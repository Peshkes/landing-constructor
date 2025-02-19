import {useState} from "react";
import SideIconMenu from "../side-icon-menu/SideIconMenu.tsx";
import SideContentMenu from "../side-content-menu/SideContentMenu.tsx";
import GridButton from "../../../shared/components/buttons/GridButton.tsx";
import ItemsContent from "./item-content/ItemsContent.tsx";
import AiButton from "../../../shared/components/buttons/AiButton.tsx";
import AiMenuContent from "./ai-content/AiMenuContent.tsx";

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
            <SideContentMenu side={"right"} isOpen={isOpen} minWidth={300} maxWidth={500} defaultWidth={300}>
                {activeButton === 'grid' && <ItemsContent/>}
                {activeButton === 'ai' && <AiMenuContent/>}
            </SideContentMenu>
            <SideIconMenu topNodes={
                <>
                <GridButton onClick={() => handleButtonClick('grid')} isOpen={isOpen && activeButton === 'grid'}/>
                <AiButton onClick={() => handleButtonClick('ai')} isOpen={isOpen && activeButton === 'ai'}/>
                </>
            }/>
        </div>
    );
};

export default RightMenu;
