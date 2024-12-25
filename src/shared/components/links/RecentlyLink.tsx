import SVG from "../../images/icons/recently.svg";
import MenuLink from "../../ui/menu-button-link/MenuLink.tsx";

const RecentlyLink = ({ to }: { to: string }) => {
    return (
        <MenuLink to={to}>
            <img src={SVG} alt="recently"/> Недавнее
        </MenuLink>
    );
};

export default RecentlyLink
