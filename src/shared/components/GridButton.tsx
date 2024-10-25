import gridSVG from '../images/grid.svg';
import MenuButton from "../ui/menu-button/MenuButton.tsx";

const GridButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <MenuButton onClick={onClick} isOpen={isOpen} size={34}>
            <img src={gridSVG} alt="layers"/>
        </MenuButton>
    );
};

export default GridButton;
