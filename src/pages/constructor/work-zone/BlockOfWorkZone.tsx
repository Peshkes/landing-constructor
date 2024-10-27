import {DraggableComponentData, OfferBlock} from "../../../features/constructor/types.ts";
import {draggableTypes} from "../../../features/constructor/constants.ts";
import {useDrop} from "react-dnd";
import useConstructor from "../../../features/constructor/useConstructor.ts";
import {createOfferBlock, findComponent} from "../../../shared/functions.ts";
import React from "react";

const BlockOfWorkZone = ({offerBlock, index}: { offerBlock: OfferBlock, index: number }) => {
    const {addBlock} = useConstructor();
    const [, drop] = useDrop({
        accept: draggableTypes.CONSTRUCTION_BLOCKS,
        drop: (draggedItem: DraggableComponentData) => {
            addBlock(index, createOfferBlock(draggedItem));
        }
    });
    console.log(offerBlock.settings);
    const component = findComponent(offerBlock.type, offerBlock.block_code);
    return (
        <div ref={drop}>
            {component && React.createElement(component, offerBlock.settings)}
        </div>
    );
};

export default BlockOfWorkZone;
