import {create} from "zustand";
import {OfferPreview, OffersStore} from "./types.ts";

const template: OfferPreview = {
    id: "asdasd-asdasdasd-asdasd-adsdas",
    name: "Template Offer",
    status: "draft"
};

const useOffers = create<OffersStore>((set, get) => ({
    offerPreviews: [
        template
    ],
    getStatusById: (id) => get().offerPreviews.find((offer) => offer.id === id)!.status,
    setStatusById: (id, status) => {
        const offerPreviews = [...get().offerPreviews];
        const index = offerPreviews.findIndex((offer) => offer.id === id);
        if (index >= 0) {
            offerPreviews[index].status = status;
            set({offerPreviews});
        }
    }
}));

export default useOffers;
