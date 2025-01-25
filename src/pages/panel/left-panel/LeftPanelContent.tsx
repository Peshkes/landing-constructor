import styles from "./leftPanel.module.css";
import MenuButton from "../../../shared/ui/menu-button-link/MenuButton.tsx";

import USER_SVG from "../../../shared/images/icons/user.svg";
import LOGOUT_SVG from "../../../shared/images/icons/logout.svg";
import useAuthentication from "../../../features/authentication/useAuthentication.ts";
import GroupsLink from "../../../shared/components/links/GroupsLink.tsx";
import OffersLink from "../../../shared/components/links/OffersLink.tsx";
import RecentlyLink from "../../../shared/components/links/RecentlyLink.tsx";
import MenuLink from "../../../shared/ui/menu-button-link/MenuLink.tsx";

const LeftPanelContent = () => {
    const user = useAuthentication(state => state.user);
    return (
        <>
            <div className={styles.topSide}>
                <RecentlyLink to={"/panel"}/>
                <OffersLink to={"/panel/offers"}/>
                <GroupsLink to={"/panel/groups"}/>
            </div>
            <div className={styles.botSide}>
                <MenuLink to={"/panel/profile"}>
                    <img src={USER_SVG} alt="user"/>{user!.name}
                </MenuLink>
                <MenuButton onClick={() => {}}>
                    <img src={LOGOUT_SVG} alt="exit"/>Выйти
                </MenuButton>
            </div>
        </>
    )
}
export default LeftPanelContent
