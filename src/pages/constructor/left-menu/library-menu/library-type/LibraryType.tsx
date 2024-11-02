import style from "./libraryType.module.css";
import {Library} from "../../../../../features/constructor/types.ts";

type Props = {
    type: string,
    onClick: (category: keyof Library) => void ;
    isActive: boolean;
    isExtended: boolean;
}

const LibraryType = ({ type, isActive, onClick, isExtended }: Props) => {
    return (
        <div onClick={() => onClick(type as keyof Library)}
             className={`${style.block} no-select ${isActive ? style.active : ""}`}>
            {!isExtended && (
                <span className={`${style.arrow} ${isActive ? style.rotated : ""}`}>{">"}</span>
            )}
            <p>{type}</p>
            {isExtended && (
                <div className={style.activeLine}/>
            )}
        </div>
    );
};

export default LibraryType;
