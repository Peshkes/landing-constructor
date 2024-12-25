import groupSVG from "../../images/icons/companies.svg";
import MenuLink from "../../ui/menu-button-link/MenuLink.tsx";

const GroupsLink = ({ to }: { to: string }) => {
    return (
        <MenuLink to={to}>
            <img src={groupSVG} alt="groups"/> Группы
        </MenuLink>
    );
};

export default GroupsLink
