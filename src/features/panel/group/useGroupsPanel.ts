import {create} from "zustand";
import {GroupApi} from "./GroupApi.ts";
import {GroupsStore} from "./types.ts";
import {OfferGroupRole} from "../offers/types.ts";

const useGroupsPanel = create<GroupsStore>((set, get) => ({
    offerPreviews: [],
    groupAccesses: [],
    groupPage: 0,
    groupIsLoading: false,
    groupFilters: {
        admin: true,
        moderator: true,
        user: true
    },
    groupsAreFull: false,

    incrementPage: () => {
        const groupPage = get().groupPage + 1
        set({groupPage});
        get().fetchGroups(groupPage);
    },
    toggleFilter: (filter: OfferGroupRole) => {
        set({groupFilters: {...get().groupFilters, [filter]: !get().groupFilters[filter]}});
        get().resetPageAndFetch();
    },
    resetPageAndFetch: () => {
        set({groupPage: 0});
        get().fetchGroups(0);
    },
    fetchGroups: async (page?: number) => {
        page = page || get().groupPage;
        const groupAccesses = get().groupAccesses;
        set({groupIsLoading: true});
        try {
            const filterMap = get().groupFilters;
            const filters = (Object.keys(filterMap) as OfferGroupRole[])
                .filter(item => filterMap[item]);
            const response = await GroupApi.getPaginatedGroups(page, filters);
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
    selectedGroupData: null,
    groupDataIsLoading: false,
    selectGroup: (id: string) => {
        if (id !== get().selectedGroupId) {
            set({selectedGroupId: id});
            get().fetchGroupData(id);
        }
    },

    fetchGroupData: async (group_id: string) => {
        set({groupDataIsLoading: true});
        try {
            const response = await GroupApi.getGroup(group_id);
            set({selectedGroupData: response});
        } catch (error) {
            console.error("Ошибка при загрузке данных группы:", error);
        } finally {
            set({groupDataIsLoading: false});
        }
    }
}));

export default useGroupsPanel;
