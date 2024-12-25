import gridSVG from '../../images/icons/grid.svg';
import MenuButton from "../../ui/menu-button-link/MenuButton.tsx";

const GridButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={gridSVG} alt="layers"/>
        </MenuButton>
    );
};

export default GridButton;
