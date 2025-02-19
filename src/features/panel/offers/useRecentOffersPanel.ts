import {RecentOffersStore} from "./types.ts";
import {create} from "zustand";
import {OfferApi} from "./OfferApi.ts";

const useRecentOffersPanel = create<RecentOffersStore>((set) => ({
    offerPreviews: [],
    offersAreLoading: false,

    fetchOffers: async () => {
        set({offersAreLoading: true});
        try {
            const response = await OfferApi.getPaginatedOffers();
            set({offerPreviews: response.data});
        } catch (error) {
            console.error("Ошибка при загрузке офферов:", error);
        } finally {
            set({ offersAreLoading: false });
        }
    },
}))

export default useRecentOffersPanel;
