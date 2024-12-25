import SVG from '../../images/icons/pagesettings.svg';
import MenuButton from "../../ui/menu-button-link/MenuButton.tsx";

const UpButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={SVG} alt="page settings"/>
        </MenuButton>
    );
};

export default UpButton;
