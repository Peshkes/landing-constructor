import MenuButton from "../../ui/menu-button-link/MenuButton.tsx";
import settingsSVG from "../../images/icons/adjustment.svg";

const SettingsButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={settingsSVG} alt="page settings"/>
        </MenuButton>
    );
};

export default SettingsButton;
