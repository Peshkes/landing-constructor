import {OffersStore} from "./types.ts";
import {create} from "zustand";

const useOfferPanel = create<OffersStore>(() => ({
    offerPreviews: [],
}))

export default useOfferPanel;
