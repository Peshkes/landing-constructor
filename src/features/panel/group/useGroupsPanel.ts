import {create} from "zustand";
import {GroupApi} from "./GroupApi.ts";
import {GroupsStore} from "./types.ts";

const useGroupsPanel = create<GroupsStore>((set, get) => ({
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
    resetPageAndFetch: (user_id: string) => {
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
