import MenuButton from "../../shared/ui/menu-button-link/MenuButton.tsx";
import useConstructor from "../../features/constructor/useConstructor.ts";
import TopMenu from "../../shared/components/top-menu/TopMenu.tsx";
import useAuthentication from "../../features/authentication/useAuthentication.ts";

const TopConstructionMenu = () => {
    const {status, offer} = useConstructor();
    const {user} = useAuthentication();

    return (
        <TopMenu
            leftMenu={<>{user.name}</>}
            centerMenu={<><p>Статус: {offer?.status} ({status})</p></>}
            rightMenu={
                <>
                    <MenuButton onClick={() => {}}>Опубликовать</MenuButton>
                    <MenuButton onClick={() => {}}>Сохранить</MenuButton>
                </>
            }
        />
    );
};

export default TopConstructionMenu;
