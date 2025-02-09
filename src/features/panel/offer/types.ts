export type OffersStore = {
    offerPreviews: OfferPreview[],
};

export type OfferPreview = {
    id: string,
    image: string,
    name: string,
    status: OfferStatus,
    views: number,
    expirationDate?: Date
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
