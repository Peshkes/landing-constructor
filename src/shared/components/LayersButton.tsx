import layersSVG from '../images/layers.svg';
import MenuButton from "../ui/menu-button/MenuButton.tsx";

const LayersButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={layersSVG} alt="layers"/>
        </MenuButton>
    );
};

export default LayersButton;
