import upSVG from '../images/icons/up.svg';
import MenuButton from "../ui/menu-button/MenuButton.tsx";

const UpButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={upSVG} alt="up"/>
        </MenuButton>
    );
};

export default UpButton;
