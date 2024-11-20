import {useRef} from "react";
import {useDrag} from "react-dnd";
import style from "./libraryItem.module.css";
import {BlockSettings} from "../../../../../features/constructor/types.ts";
import {draggableTypes} from "../../../../../features/constructor/constructorSettings.ts";

type Props = {
    category: string,
    title: string,
    block_code: string,
    image: string,
    isExpanded: boolean,
    defaultSettings: BlockSettings
}

const LibraryItem = ({category, title, block_code, image, defaultSettings, isExpanded}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{isDragging}, drag] = useDrag({
        type: draggableTypes.CONSTRUCTION_BLOCKS,
        item: {category, block_code, defaultSettings},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(ref);

    return (
        <div className={style.block + " " + (isExpanded ? style.expanded : "")} ref={ref}
             style={{opacity: isDragging ? 0.5 : 1}}>
            <p><span>{block_code}</span> {title}</p>
            <img src={image} alt={block_code}/>
        </div>
    );
};

export default LibraryItem;
