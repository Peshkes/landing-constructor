import SVG from "../../../../../shared/images/icons/search.svg";
import MenuButton from "../../../../../shared/ui/menu-button-link/MenuButton.tsx";
import styles from "./search.module.css"


const Search = () => {
    return (
        <div className={styles.block}>
            <input type="text" placeholder="Поиск"/>
            <MenuButton size={44} onClick={()=>{}}>
                <img src={SVG} alt="поиск"/>
            </MenuButton>
        </div>
    )
}
export default Search
