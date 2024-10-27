import {DraggableComponentData, OfferBlock} from "../features/constructor/types.ts";
import {blocksLibrary} from "../features/constructor/constants.ts";

const BASE_URL = import.meta.env.VITE_API_URL;

export const sendRequest = async <D, R>(
    endpoint: string,
    method: string = 'GET',
    data?: D,
    signal?: AbortSignal
): Promise<R> => {
    return fetch(`${BASE_URL}/${endpoint}`, {
        method,
        headers: {'Content-Type': 'application/json'},
        body: data ? JSON.stringify(data) : undefined,
        signal,
    })
        .then(async (response) => {
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
            }
            return response.json();
        })
        .catch((error) => {
            if (error.name === 'AbortError') {
                console.error(`Request to ${endpoint} was aborted`);
            } else {
                console.error(`Error ${method} ${endpoint}:`, error);
            }
            throw error;
        });
};

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
