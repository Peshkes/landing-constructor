import {RequestService} from "../../shared/RequestService.ts";

export class PanelApi{
    private static groupBaseUrl = 'group';

    public static getGroups = () => {
        const endpoint = this.groupBaseUrl + '/';
        const request = RequestService.sendRequest(endpoint, "GET");
        return RequestService.handleRequest(request, endpoint);
    }
}
