import {create} from "zustand";
import {ConstructorStore} from "./types.ts";

const useConstructor = create<ConstructorStore>((set, get) => ({
    offer: null,
    status: "not saved",
    addBlock: (orderNumber, block) => {
        const offer = get().offer!;
        const updatedBody = [...offer.body];
        if (orderNumber >= 0 && orderNumber <= updatedBody.length) {
            updatedBody.splice(orderNumber, 0, block);
            set({offer: {...offer, body: updatedBody}});
        }
    },

    removeBlock: (orderNumber) => {
        const offer = get().offer!;
        const updatedBody = [...offer.body];
        if (orderNumber >= 0 && orderNumber < updatedBody.length) {
            updatedBody.splice(orderNumber, 1);
            set({offer: {...offer, body: updatedBody}});
        }
    },

    updateBlock: (orderNumber, updatedBlock) => {
        const offer = get().offer!;
        const updatedBody = [...offer.body];
        if (orderNumber >= 0 && orderNumber < updatedBody.length) {
            updatedBody[orderNumber] = updatedBlock;
            set({offer: {...offer, body: updatedBody}});
        }
    },

    moveBlock: (from, to) => {
        const offer = get().offer!;
        const updatedBody = [...offer.body];
        if (from >= 0 && from < updatedBody.length && to >= 0 && to < updatedBody.length) {
            const [movedBlock] = updatedBody.splice(from, 1)
            updatedBody.splice(to, 0, movedBlock);
            set({offer: {...offer, body: updatedBody}});
        }
    },
    saveOffer: (offer) => {
        console.log(offer)
    }, //TODO save offer
    publishOffer: (offer) => {
        console.log(offer)
    }, //TODO publish offer
}));

export default useConstructor;
