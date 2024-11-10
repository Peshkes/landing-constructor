export type OffersStore = {
    offerPreviews: OfferPreview[]
};

export type OfferPreview = {
    id: string,
    name: string,
    status: OfferStatus,
};

export type OfferStatus = "published" | "draft" | "archived";
