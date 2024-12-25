import settingsSVG from "../../images/icons/adjustment.svg";
import MenuLink from "../../ui/menu-button-link/MenuLink.tsx";

const SettingsLink = ({ to }: { to: string }) => {
    return (
        <MenuLink to={to}>
            <img src={settingsSVG} alt="settings"/> Настройки
        </MenuLink>
    );
};

export default SettingsLink
