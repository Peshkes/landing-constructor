import {OfferBlock} from "../../../../features/constructor/types.ts";
import style from "./itemsStructureBlock.module.css";
import {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import useConstructor from "../../../../features/constructor/useConstructor.ts";
import {draggableTypes} from "../../../../features/constructor/constructorSettings.ts";
import useAnimate from "../../../../features/constructor/useAnimate.ts";

const ItemsStructureBlock = ({block, index}: { block: OfferBlock, index: number }) => {

    const {selectedBlock, selectBlock} = useConstructor();
    const {blockIsOnTheTrash} = useAnimate();

    const {moveBlock} = useConstructor();
    const ref = useRef<HTMLDivElement>(null);

    const [{isDragging}, drag] = useDrag({
        type: draggableTypes.STRUCTURE_ITEM_TYPE,
        item: {index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: draggableTypes.STRUCTURE_ITEM_TYPE,
        hover: (draggedItem: { index: number }) => {
            if (draggedItem.index !== index) {
                moveBlock(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    drag(drop(ref));

    return (
        <div>
            <div
                className={style.block + " " + (block.id === selectedBlock ? style.active : "") + (blockIsOnTheTrash === index ? " " + style.shaking : "")}
                ref={ref}
                style={{opacity: isDragging ? 0.5 : 1}}
                onClick={() => selectBlock(selectedBlock === block.id ? null : block.id)}>
                <div>{block.block_code}</div>
                <div>{block.id}</div>
            </div>
        </div>
    );
};

export default ItemsStructureBlock;
