import {OfferPreview} from "../offers/types.ts";

export type ConstructorStore = {
    status: constructorStatus,
    offer: Offer | null,
    addBlock: (orderNumber: number, block: Block) => void,
    removeBlock: (orderNumber: number, block: Block) => void,
    updateBlock: (borderNumber: number, lock: Block) => void,
    moveBlock: (from: number, to: number) => void,
    saveOffer: (offer: Offer) => void,
    publishOffer: (offer: Offer) => void,
}

export type Offer = OfferPreview & {
    body: Array<Block>
};

export type constructorStatus = "saved" | "not saved";

export type HeaderBlock = {
    title: string,
    backgroundColor: string,
    textColor: string,
    image: string,
};

export type Block = HeaderBlock;
