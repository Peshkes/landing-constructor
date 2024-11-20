import {DraggableComponentData, OfferBlock} from "../features/constructor/types.ts";
import {blocksLibrary} from "../features/constructor/blockLibrary.ts";

export function generateId() {
    return Math.random().toString(36).substring(2, 10)
}

export function createOfferBlock({category, block_code, defaultSettings}: DraggableComponentData): OfferBlock {
    return {
        id: generateId(),
        type: category,
        block_code,
        settings: defaultSettings,
    }
}

export function findComponent(type: string, code: string) {
    const category = blocksLibrary.find(category => category.title === type);
    const libraryItem = category ? category.blocks.find(block => block.block_code === code) : null;
    return libraryItem ? libraryItem.item : null;
}

export function getRandomImageURL() {
    return `https://picsum.photos/800/600?random=${Math.random()}`;
}

export function debounce (func: (...args: any[]) => any, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};
