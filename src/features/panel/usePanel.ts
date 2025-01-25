import {create} from "zustand";
import {GroupAccess, OfferPreview, OffersStore} from "./types.ts";
import {getRandomImageURL} from "../../shared/functions.ts";

const templates: OfferPreview[] = [{
    id: "asdasd-asdasdasd-asdasd-adsdas",
    image: getRandomImageURL(),
    name: "Template Offer",
    status: "published",
    views: 4,
    expirationDate: new Date("2022-01-01"),
}, {
    id: "asdasd-asdasdasd-asdasd-ad2222s",
    image: getRandomImageURL(),
    name: "Template Offer 2",
    status: "draft",
    views: 11,
    expirationDate: new Date("2022-01-01"),
}, {
    id: "asdasd-asdasdasd-a22asd-ad2222s",
    image: getRandomImageURL(),
    name: "Template Offer 3",
    status: "archived",
    views: 150,
    expirationDate: new Date("2022-01-01"),
}];

const template2: GroupAccess[] = [{
    groupId: "asdasd-asdasdasd-asdasd-adsdas",
    name: "PREventBureau",
    image: getRandomImageURL(),
    role: {
        name: "admin",
        weight: 10
    }
}, {
    groupId: "asdasd-asdasdasd-asdasd-adsdas",
    name: "LikeSHOCK",
    image: getRandomImageURL(),
    role: {
        name: "moderator",
        weight: 20
    }
}, {
    groupId: "asdasd-asdasdasd-asdasd-adsdas",
    name: "SomethingElse",
    image: getRandomImageURL(),
    role: {
        name: "user",
        weight: 30
    }
}
]

const usePanel = create<OffersStore>(() => ({
    offerPreviews: templates,
    groupAccesses: template2,
    selectedGroupId: "asdasd-asdasdasd-asdasd-adsdas",
    selectedGroup: {
        groupId: "asdasd-asdasdasd-asdasd-adsdas",
        name: "PREventBureau",
        accesses: [{
            accountId: "asdasd-asdasdasd-asdasd-adsdas",
            name: "Alice",
            role: "admin"
        }, {
            accountId: "asdasd-asdasdasd-asdasd-adsdas",
            name: "Boris",
            role: "moderator"
        }, {
            accountId: "asdasd-asdasdasd-asdasd-adsdas",
            name: "Charlie",
            role: "user"
        }],
        settings: {
            image: getRandomImageURL()
        },
    }

}));

export default usePanel;
