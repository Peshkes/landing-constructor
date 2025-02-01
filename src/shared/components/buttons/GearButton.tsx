import MenuButton from "../../ui/menu-button-link/MenuButton.tsx";
import settingsSVG from "../../images/icons/settings.svg";

const GearButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={settingsSVG} alt="constructor settings"/>
        </MenuButton>
    );
};

export default GearButton;
