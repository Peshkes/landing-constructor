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
        set({groupPage: get().groupPage + 1});
        get().fetchGroups(user_id, get().groupPage + 1);
    },
    resetPage: (user_id: string) => {
        set({groupPage: 0});
        get().fetchGroups(user_id, 0);
    },
    fetchGroups: async (user_id: string, page?: number) => {
        page = page || get().groupPage;
        const groupAccesses = get().groupAccesses;
        set({groupIsLoading: true});
        const response = await GroupApi.getPaginatedGroups(user_id, page, get().groupFilters);
        const groupsAreFull = response.data.length === response.total || response.total === response.data.length + groupAccesses.length;
        if (page === 0 || groupAccesses.length === 0) set({groupAccesses: response.data, groupIsLoading: false, groupsAreFull});
        else set({groupAccesses: groupAccesses.concat(response.data), groupIsLoading: false, groupsAreFull});
    },

    selectedGroupId: null,
    selectedGroup: null,
    selectGroup: (id: string) => {
        set({selectedGroupId: id});
    }
}));

export default useGroupsPanel;
