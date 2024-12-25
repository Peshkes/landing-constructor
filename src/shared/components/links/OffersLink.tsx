import SVG from "../../images/icons/offers.svg";
import MenuLink from "../../ui/menu-button-link/MenuLink.tsx";

const OffersLink = ({ to }: { to: string }) => {
    return (
        <MenuLink to={to}>
            <img src={SVG} alt="offers"/> Офферы
        </MenuLink>
    );
};

export default OffersLink
