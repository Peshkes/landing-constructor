import SVG from '../images/icons/click_around.svg';
import MenuButton from "../ui/menu-button/MenuButton.tsx";

const ClickButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={SVG} alt="layers"/>
        </MenuButton>
    );
};

export default ClickButton;
