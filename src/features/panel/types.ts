export type OffersStore = {
    offerPreviews: OfferPreview[],
    groupAccesses: GroupAccess[],
    groupPage: number,
    groupIsLoading: boolean,
    groupsAreFull: boolean,
    groupFilters: string[],

    incrementPage: (user_id: string) => void,
    resetPage: (user_id: string) => void,
    fetchGroups: (user_id: string, page?: number) => void,

    selectedGroupId: string | null,
    selectedGroup : Group | null,
};

export type Group = {
    groupId: string,
    name: string,
    accesses: {
        accountId: string,
        name: string,
        role: string,
        email: string
    }[],
    settings: {
       image: string
    },
    offerPreviews: OfferPreview[],
}

export type GroupAccess = {
    groupId: string,
    name: string,
    image: string,
    role: Role,
}

export type CreateGroupRequest = {
    name: string
}

export type GetPaginatedGroupsResponse = {
    data: GroupAccess[],
    total: number,
}

export type Role = {
    weight: number,
    name: RoleName
};

export type RoleName = "admin" | "user" | "moderator";

export type OfferPreview = {
    id: string,
    image: string,
    name: string,
    status: OfferStatus,
    views: number,
    expirationDate: Date | null
};

export enum OfferStatuses {
    PUBLISHED = "published",
    DRAFT = "draft",
    ARCHIVED = "archived",
}

export type OfferStatus = `${OfferStatuses}`;
export const offerStatuses = Object.values(OfferStatuses)

export enum OfferGroupRoles {
    ADMIN = "admin",
    MODERATOR = "moderator",
    USER = "user",
}

export type OfferGroupRole = `${OfferGroupRoles}`;
export const offerGroupRoles = Object.values(OfferGroupRoles)
