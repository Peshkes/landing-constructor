import downSVG from '../../images/icons/down.svg';
import MenuButton from "../../ui/menu-button-link/MenuButton.tsx";

const DownButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={downSVG} alt="down"/>
        </MenuButton>
    );
};

export default DownButton;
