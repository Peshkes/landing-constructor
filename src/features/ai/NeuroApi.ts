import {RequestService} from "../../shared/RequestService.ts";

export class NeuroApi {
    private static baseEndpoint = 'neuro';

    public static getAiResponse(message: string) {
        return RequestService.processRequest(this.baseEndpoint, "POST", {message});
    }

    public static getAiResponseStream(message: string, handleChunk: (chunk: any) => void, handleFinish: () => void) {
        return RequestService.createSecureStream(this.baseEndpoint + "/single-message", handleChunk, handleFinish, "POST", {message});
    }
}
