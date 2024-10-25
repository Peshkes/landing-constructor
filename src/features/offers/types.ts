export type OffersStore = {
    offerPreviews: OfferPreview[]
    getStatusById: (id: string) => OfferStatus
    setStatusById: (id: string, status: OfferStatus) => void
};

export type OfferPreview = {
    id: string,
    name: string,
    status: OfferStatus,
};

export type OfferStatus = "published" | "draft" | "archived";
