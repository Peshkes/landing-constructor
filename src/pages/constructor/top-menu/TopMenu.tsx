import style from "./topMenu.module.css";
import MenuButton from "../../../shared/ui/menu-button/MenuButton.tsx";
import useConstructor from "../../../features/constructor/useConstructor.ts";

const TopMenu = () => {
    const {status, offer} = useConstructor();

    return (
        <div className={style.block}>
            <div className={style.left}>
                Хлебные крошки
            </div>
            <div className={style.center}>
                <p>Статус: {offer?.status} ({status})</p>
            </div>
            <div className={style.right}>
                <MenuButton onClick={()=>{}}> <p>Опубликовать</p> </MenuButton>
                <MenuButton onClick={()=>{}}> Сохранить </MenuButton>
            </div>
        </div>
    );
};

export default TopMenu;
