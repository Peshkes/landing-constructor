export type RecentOffersStore = {
    offerPreviews: OfferPreview[],
    offersAreLoading: boolean,

    fetchOffers: (page?: number) => void,
};

export type OffersStore = {
    offerPage: number,
    roleFilters: Record<OfferAllRole, boolean>,
    statusFilters: Record<OfferStatus, boolean>,
    offersAreFull: boolean,

    incrementPage: () => void,
    toggleRoleFilter: (filter: OfferAllRole) => void,
    toggleStatusFilter: (filter: OfferStatus) => void,
    resetPageAndFetch: () => void,
} & RecentOffersStore;

export type OfferPreview = {
    id: string,
    image: string,
    name: string,
    status: OfferStatus,
    views?: number,
    expiration_date?: Date
    draft_id?: string
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

enum OfferUserRoles {
    OWNER = "owner",
}

export type OfferGroupRole = `${OfferGroupRoles}`;
export const offerGroupRoles = Object.values(OfferGroupRoles)

export type OfferAllRoles = OfferGroupRoles | OfferUserRoles;
export type OfferAllRole = `${OfferAllRoles}`;
export const offerAllRoles = [...Object.values(OfferGroupRoles), ...Object.values(OfferUserRoles)];

export type GetPaginatedOffersResponse = {
    data: OfferPreview[],
    total: number
}

export type CreateGroupRequest = {
    name: string
}
