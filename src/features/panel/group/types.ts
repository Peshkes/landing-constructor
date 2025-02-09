import {OfferPreview} from "../offer/types.ts";

export type GroupsStore = {
    groupAccesses: GroupAccess[],
    groupPage: number,
    groupIsLoading: boolean,
    groupsAreFull: boolean,
    groupFilters: string[],

    incrementPage: (user_id: string) => void,
    resetPageAndFetch: (user_id: string) => void,
    changeFilters: (user_id: string, filters: string[]) => void,
    fetchGroups: (user_id: string, page?: number) => void,

    selectedGroupId: string | null,
    selectedGroupData : Group | null,
    groupDataIsLoading: boolean,

    selectGroup: (id: string) => void,
    fetchGroupData: (group_id: string) => void
};

export type Group = {
    _id: string,
    name: string,
    groupAccesses: {
        accountId: string,
        name: string,
        role: string,
        email: string
    }[],
    settings: {
        image: string
    },
    publicOffers: OfferPreview[],
    draftOffers: OfferPreview[],
}

export type GroupAccess = {
    group_id: string,
    name: string,
    image: string,
    role: RoleName,
}

export type CreateGroupRequest = {
    name: string
}

export type GetPaginatedGroupsResponse = {
    data: GroupAccess[],
    total: number,
}

export type RoleName = "admin" | "user" | "moderator";
