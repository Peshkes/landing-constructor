import {create} from "zustand";
import {OffersStore} from "../types.ts";
import {GroupApi} from "./GroupApi.ts";

const useGroupsPanel = create<OffersStore>((set, get) => ({
    offerPreviews: [],
    groupAccesses: [],
    groupPage: 0,
    groupIsLoading: false,
    groupFilters: [],
    groupsAreFull: false,

    incrementPage: (user_id: string) => {
        const groupPage = get().groupPage + 1
        set({groupPage});
        get().fetchGroups(user_id, groupPage);
    },
    resetPage: (user_id: string) => {
        set({groupPage: 0});
        get().fetchGroups(user_id, 0);
    },
    fetchGroups: async (user_id: string, page?: number) => {
        page = page || get().groupPage;
        const groupAccesses = get().groupAccesses;
        set({groupIsLoading: true});
        try {
            const response = await GroupApi.getPaginatedGroups(user_id, page, get().groupFilters);
            const groupsAreFull = response.data.length === response.total || response.total === response.data.length + groupAccesses.length;
            set({
                groupAccesses: page === 0 || groupAccesses.length === 0 ? response.data : groupAccesses.concat(response.data),
                groupsAreFull,
            });
        } catch (error) {
            console.error("Ошибка при загрузке групп:", error);
        } finally {
            set({ groupIsLoading: false });
        }
    },

    selectedGroupId: null,
    selectedGroup: null,
    selectGroup: (id: string) => {
        set({selectedGroupId: id});
    }
}));

export default useGroupsPanel;
