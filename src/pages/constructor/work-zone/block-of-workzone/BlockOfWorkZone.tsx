import {DraggableComponentData, OfferBlock} from "../../../../features/constructor/types.ts";
import {useDrop} from "react-dnd";
import useConstructor from "../../../../features/constructor/useConstructor.ts";
import {createOfferBlock, findComponent} from "../../../../shared/functions.ts";
import React from "react";
import styles from "./blockOfWorkZone.module.css"
import ClickButton from "../../../../shared/components/ClickButton.tsx";
import UpButton from "../../../../shared/components/UpButton.tsx";
import DownButton from "../../../../shared/components/DownButton.tsx";
import {draggableTypes} from "../../../../features/constructor/constructorSettings.ts";

const BlockOfWorkZone = ({offerBlock, index}: { offerBlock: OfferBlock, index: number }) => {
    const {selectedBlock, selectBlock, moveBlock} = useConstructor();
    const {addBlock} = useConstructor();
    const [, drop] = useDrop({
        accept: draggableTypes.CONSTRUCTION_BLOCKS,
        drop: (draggedItem: DraggableComponentData) => {
            addBlock(index, createOfferBlock(draggedItem));
        }
    });

    const component = findComponent(offerBlock.type, offerBlock.block_code);
    return (
        <div ref={drop} className={styles.block + " " + (selectedBlock === offerBlock.id ? styles.selectedBlock : "")}>
            {component && React.createElement(component, offerBlock.settings)}
            <div className={styles.buttonsContainer}>
                <ClickButton isOpen={true} onClick={() => selectBlock(offerBlock.id)}/>
                <UpButton isOpen={true} onClick={() => moveBlock(index, index - 1)}/>
                <DownButton isOpen={true} onClick={() => moveBlock(index, index + 1)}/>
            </div>
        </div>
    );
};

export default BlockOfWorkZone;
