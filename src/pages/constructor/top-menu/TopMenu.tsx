import style from "./topMenu.module.css";
import MenuButton from "../../../shared/ui/menu-button/MenuButton.tsx";
import useConstructor from "../../../features/constructor/useConstructor.ts";
import useOffers from "../../../features/offers/useOffers.ts";

const TopMenu = () => {
    const {status, offer} = useConstructor();
    const {getStatusById} = useOffers();

    return (
        <div className={style.block}>
            <div className={style.left}>
                Хлебные крошки
            </div>
            <div className={style.center}>
                <p>Статус: {getStatusById(offer!.id)} ({status})</p>
            </div>
            <div className={style.right}>
                <MenuButton onClick={()=>{}}> <p>Опубликовать</p> </MenuButton>
                <MenuButton onClick={()=>{}}> Сохранить </MenuButton>
            </div>
        </div>
    );
};

export default TopMenu;
