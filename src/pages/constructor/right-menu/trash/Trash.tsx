import useConstructor from "../../../../features/constructor/useConstructor.ts";
import {useDrop} from "react-dnd";
import {draggableTypes} from "../../../../features/constructor/constructorSettings.ts";
import style from "./trash.module.css";
import useAnimate from "../../../../features/constructor/useAnimate.ts";

const Trash = () => {
    const {removeBlock} = useConstructor();
    const {setBlockOnTheTrash, blockIsOnTheTrash} = useAnimate();
    const [, drop] = useDrop({
        accept: draggableTypes.STRUCTURE_ITEM_TYPE,
        hover: (draggedItem) => {
            setBlockOnTheTrash(draggedItem.index);
        },
        drop: (draggedItem: { index: number }) => {
            removeBlock(draggedItem.index);
            setBlockOnTheTrash(null);
        },
        collect: (monitor) => {
            if (!monitor.isOver())
                if (blockIsOnTheTrash !== null)
                    setBlockOnTheTrash(null);
        },
    });
    return (
        <div ref={drop} className={style.trashZone + " " + (blockIsOnTheTrash !== null ? style.isActive : "")}>
            <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                <path
                      d="m481.84 70.46h-145.314v-19.23a51.288 51.288 0 0 0 -51.226-51.23h-58.6a51.288 51.288 0 0 0 -51.229 51.23v19.23h-145.311a16 16 0 0 0 0 32h20.214v310.161c0 54.8 47.348 99.379 105.546 99.379h200.161c58.2 0 105.545-44.581 105.545-99.379v-310.161h20.214a16 16 0 0 0 0-32zm-274.365-19.23a19.251 19.251 0 0 1 19.225-19.23h58.6a19.252 19.252 0 0 1 19.23 19.23v19.23h-97.055zm222.151 361.391c0 37.153-32.992 67.379-73.545 67.379h-200.161c-40.554 0-73.546-30.226-73.546-67.379v-310.161h347.252zm-128.889-33.5v-215.967a16 16 0 0 1 32 0v215.963a16 16 0 0 1 -32 0zm-121.474 0v-215.967a16 16 0 0 1 32 0v215.963a16 16 0 0 1 -32 0z"/>
            </svg>
        </div>
    )
}
export default Trash
