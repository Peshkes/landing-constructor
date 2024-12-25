import layersSVG from '../../images/icons/layers.svg';
import MenuButton from "../../ui/menu-button-link/MenuButton.tsx";

const LayersButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={layersSVG} alt="layers"/>
        </MenuButton>
    );
};

export default LayersButton;
