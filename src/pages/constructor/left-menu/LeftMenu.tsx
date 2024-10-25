import SideContentMenu from "../side-content-menu/SideContentMenu.tsx";
import SideIconMenu from "../side-icon-menu/SideIconMenu.tsx";
import {useState} from "react";
import GridButton from "../../../shared/components/GridButton.tsx";
import ItemsContent from "./ItemsContent.tsx";

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
                <GridButton onClick={() => handleButtonClick('grid')} isOpen={isOpen && activeButton === 'grid'}/>
            </SideIconMenu>
            <SideContentMenu side={"left"} isOpen={isOpen} minWidth={200} maxWidth={400}>
                {activeButton === 'grid' && <ItemsContent/>}
            </SideContentMenu>
        </div>
    );
};

export default LeftMenu;
