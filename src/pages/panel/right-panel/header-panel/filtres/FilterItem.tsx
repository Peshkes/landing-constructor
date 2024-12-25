import styles from "./filtres.module.css";

type Props = {
    text: string,
    isActive?: boolean
    onClick?: () => void
}

const FilterItem = ({text, onClick, isActive = false}: Props) => {
    return (
        <div className={styles.filter + " " + (isActive ? styles.active : "")} onClick={onClick}><p>{text}</p></div>
    )
}
export default FilterItem
