import {getRandomImageURL} from "../../shared/functions.ts";

export const draggableTypes = {
    STRUCTURE_ITEM_TYPE: "StructureItemBlock",
    CONSTRUCTION_BLOCKS: "ConstructionBlocks",
}

export const constructorInputs = {
    title: "Заголовок",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    image: getRandomImageURL(),
}
