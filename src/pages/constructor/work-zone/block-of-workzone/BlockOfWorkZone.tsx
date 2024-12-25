import {DraggableComponentData, OfferBlock as OfferBlockType} from "../../../../features/constructor/types.ts";
import {useDrop} from "react-dnd";
import useConstructor from "../../../../features/constructor/useConstructor.ts";
import {createOfferBlock} from "../../../../shared/functions.ts";
import styles from "./blockOfWorkZone.module.css"
import ClickButton from "../../../../shared/components/buttons/ClickButton.tsx";
import UpButton from "../../../../shared/components/buttons/UpButton.tsx";
import DownButton from "../../../../shared/components/buttons/DownButton.tsx";
import {draggableTypes} from "../../../../features/constructor/constructorSettings.ts";
import OfferBlock from "../../../../shared/components/OfferBlock.tsx";

const BlockOfWorkZone = ({offerBlock, index}: { offerBlock: OfferBlockType, index: number }) => {
    const {selectedBlock, selectBlock, moveBlock} = useConstructor();
    const {addBlock} = useConstructor();
    const [, drop] = useDrop({
        accept: draggableTypes.CONSTRUCTION_BLOCKS,
        drop: (draggedItem: DraggableComponentData) => {
            addBlock(index, createOfferBlock(draggedItem));
        }
    });

    return (
        <div ref={drop} className={styles.block + " " + (selectedBlock === offerBlock.id ? styles.selectedBlock : "")}>
            <OfferBlock offerBlock={offerBlock}/>
            <div className={styles.buttonsContainer}>
                <ClickButton isOpen={true} onClick={() => selectBlock(offerBlock.id)}/>
                <UpButton isOpen={true} onClick={() => moveBlock(index, index - 1)}/>
                <DownButton isOpen={true} onClick={() => moveBlock(index, index + 1)}/>
            </div>
        </div>
    );
};

export default BlockOfWorkZone;
