import {DraggableComponentData, OfferBlock} from "../features/constructor/types.ts";
import {blocksLibrary} from "../features/constructor/blockLibrary.ts";

export const generateId = () => Math.random().toString(36).substring(2, 10);

export const createOfferBlock = ({category, block_code, defaultSettings}: DraggableComponentData): OfferBlock => {
    console.log(defaultSettings)
    return {
        id: generateId(),
        type: category,
        block_code,
        settings: defaultSettings,
    }
}

export const findComponent = (type: string, code: string) => {
    const category = blocksLibrary.find(category => category.title === type);
    const libraryItem = category ? category.blocks.find(block => block.block_code === code) : null;
    return libraryItem ? libraryItem.item : null;
}

export const getRandomImageURL = () => {
    return `https://picsum.photos/800/600?random=${Math.random()}`;
}
