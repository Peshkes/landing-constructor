import {RequestService} from "../../../shared/RequestService.ts";
import {CreateGroupRequest, GetPaginatedGroupsResponse, Group} from "./types.ts";

export class GroupApi {
    private static baseEndpoint = 'group';

    public static getPaginatedGroups = (page: number = 0, filters?: string[]) => {
        let url = `${this.baseEndpoint}/paginated?page=${page}&limit=10`;
        if (filters && filters.length > 0) url += `&roles=${filters.join(',')}`;
        return RequestService.processSecureRequest<void, GetPaginatedGroupsResponse>(url);
    }

    public static createGroup = (name: string) => {
        const url = `${this.baseEndpoint}`;
        return RequestService.processSecureRequest<CreateGroupRequest, void>(url, 'POST', {name});
    }

    public static getGroup = (id: string) => {
        const url = `${this.baseEndpoint}/full/${id}`;
        return RequestService.processSecureRequest<void, Group>(url);
    }
}
