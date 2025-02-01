import {useState} from "react";
import SideIconMenu from "../side-icon-menu/SideIconMenu.tsx";
import SideContentMenu from "../side-content-menu/SideContentMenu.tsx";
import GridButton from "../../../shared/components/buttons/GridButton.tsx";
import ItemsContent from "./item-content/ItemsContent.tsx";

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
            <SideContentMenu side={"right"} isOpen={isOpen} minWidth={200} maxWidth={300} defaultWidth={200}>
                {activeButton === 'grid' && <ItemsContent/>}
            </SideContentMenu>
            <SideIconMenu topNodes={
                <GridButton onClick={() => handleButtonClick('grid')} isOpen={isOpen && activeButton === 'grid'}/>
            }/>
        </div>
    );
};

export default RightMenu;
