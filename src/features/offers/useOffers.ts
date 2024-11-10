import {create} from "zustand";
import {OfferPreview, OffersStore} from "./types.ts";

const template: OfferPreview = {
    id: "asdasd-asdasdasd-asdasd-adsdas",
    name: "Template Offer",
    status: "draft"
};

const useOffers = create<OffersStore>(() => ({
    offerPreviews: [
        template
    ],
}));

export default useOffers;
