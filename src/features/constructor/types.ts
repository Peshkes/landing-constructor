import {OfferPreview} from "../panel/types.ts";
import React from "react";

export type ConstructorStore = {
    status: ConstructorStatus,
    offer: Offer | null,

    updateOfferSettings: (key: string, newValue: any) => void,

    selectedBlock: string | null,
    selectBlock: (block: string | null) => void,
    getSelectedBlock: () => OfferBlock | undefined,
    updateSelectedBlockField: (fieldName: string, newValue: any) => void,

    addBlock: (orderNumber: number | null, block: OfferBlock) => void,
    removeBlock: (orderNumber: number) => void,
    updateBlock: (borderNumber: number, lock: OfferBlock) => void,
    moveBlock: (from: number, to: number) => void,

    saveOffer: (offer: Offer) => void,
    publishOffer: (offer: Offer) => void,
}

export type AnimateStore = {
    blockIsOnTheTrash: number | null,
    setBlockOnTheTrash: (order: number | null) => void,
}

export type Offer = OfferPreview & {
    body: Array<OfferBlock>,
    settings: OfferSettings,
};

export type OfferSettings = {
    backgroundColor?: string,
    customPageCss?: object,
    customContentCss?: object,
    [key: string]: any,
}

export type ConstructorStatus = "saved" | "not saved";

export type LibraryBlock = {
    block_code: string,
    title: string,
    image: string,
    item: React.FC<BlockSettings>,
    defaultSettings: BlockSettings
}

export type LibraryItem = {
    title: string,
    blocks: Array<LibraryBlock>
}

export type Library = Array<LibraryItem>

export type OfferBlock = {
    id: string,
    type: string,
    block_code: string,
    settings: BlockSettings
}

export type DraggableComponentData = {
    category: string,
    block_code: string,
    defaultSettings: BlockSettings
}

export type BlockSettings = HeaderBlockSettings;

export type HeaderBlockSettings = {
    title: string,
    backgroundColor: string,
    textColor: string,
    image: string,
};
