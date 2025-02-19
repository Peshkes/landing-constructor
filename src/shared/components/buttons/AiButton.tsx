import aiSVG from '../../images/icons/ai.svg';
import MenuButton from "../../ui/menu-button-link/MenuButton.tsx";

const AiButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={aiSVG} alt="ai"/>
        </MenuButton>
    );
};

export default AiButton;
