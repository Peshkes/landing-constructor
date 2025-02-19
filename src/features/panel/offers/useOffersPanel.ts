import {OfferAllRole, OffersStore, OfferStatus} from "./types.ts";
import {create} from "zustand";
import {OfferApi} from "./OfferApi.ts";

const useOfferPanel = create<OffersStore>((set, get) => ({
    offerPreviews: [],
    roleFilters: {
        admin: true,
        moderator: true,
        user: true,
        owner: true
    },
    statusFilters: {
        published: true,
        draft: true,
        archived: false,
    },
    offerPage: 0,
    offersAreLoading: false,
    offersAreFull: false,

    incrementPage: () => {
        const offerPage = get().offerPage + 1
        set({offerPage});
        get().fetchOffers(offerPage);
    },
    toggleRoleFilter: (filter: OfferAllRole) => {
        set({roleFilters: {...get().roleFilters, [filter]: !get().roleFilters[filter]}});
        get().resetPageAndFetch();
    },
    toggleStatusFilter: (filter: OfferStatus) => {
        set({statusFilters: {...get().statusFilters, [filter]: !get().statusFilters[filter]}});
        get().resetPageAndFetch();
    },
    resetPageAndFetch: () => {
        set({offerPage: 0});
        get().fetchOffers(0);
    },
    fetchOffers: async (page?: number) => {
        page = page || get().offerPage;
        const offerPreviews = get().offerPreviews;
        set({offersAreLoading: true});
        try {
            const roleFilterMap = get().roleFilters;
            const roleFilters = (Object.keys(roleFilterMap) as OfferAllRole[])
                .filter(item => roleFilterMap[item]);

            const statusFilterMap = get().statusFilters;
            const statusFilters = (Object.keys(statusFilterMap) as OfferStatus[])
                .filter(item => statusFilterMap[item]);

            const response = await OfferApi.getPaginatedOffers(page, 10, roleFilters, statusFilters);
            const offersAreFull = response.data.length === response.total || response.total === response.data.length + offerPreviews.length;
            set({
                offerPreviews: page === 0 || offerPreviews.length === 0 ? response.data : offerPreviews.concat(response.data),
                offersAreFull,
            });
        } catch (error) {
            console.error("Ошибка при загрузке групп:", error);
        } finally {
            set({ offersAreLoading: false });
        }
    },
}))

export default useOfferPanel;
