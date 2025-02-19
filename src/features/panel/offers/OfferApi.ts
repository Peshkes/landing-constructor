import {RequestService} from "../../../shared/RequestService.ts";
import {CreateGroupRequest, GetPaginatedOffersResponse} from "./types.ts";

export class OfferApi {
    private static baseEndpoint = 'offer';

    static async getPaginatedOffers(page: number = 0, limit: number = 10, statuses?: string[], roles?: string[]) {
        const queryParams = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
        });

        if (statuses && statuses.length > 0) queryParams.append("statuses", statuses.join(","));
        if (roles && roles.length > 0) queryParams.append("roles", roles.join(","));

        const url = `user/offers?${queryParams.toString()}`;
        return RequestService.processSecureRequest<void, GetPaginatedOffersResponse>(url);
    }

    static async getOffer(id: string) {
        const url = `${this.baseEndpoint}/${id}`;
        return RequestService.processSecureRequest<void, any>(url);
    }

    static async createOffer(name: string, group_id?: string) {
        const url = `${this.baseEndpoint}${group_id && `/group/${group_id}`}`;
        return RequestService.processSecureRequest<CreateGroupRequest, string>(url, 'POST', {name});
    }
}
