import {RequestService} from "../../shared/RequestService.ts";
import {csrfResponse} from "./types.ts";

export class AuthApi {
    private static baseEndpoint = 'auth/'
    private static password: string | null = null;

    public static async getCsrf(): Promise<boolean> {
        const maxTries = 5;
        const endpoint = this.baseEndpoint + 'csrf';

        for (let tries = 1; tries <= maxTries; tries++) {
            try {
                const request = RequestService.sendRequest<void, csrfResponse>(endpoint, "GET");
                const response = await RequestService.handleRequest(request, endpoint);

                if (response) {
                    RequestService.setGlobalHeader('x-csrf-token', response.csrfToken);
                    console.log(`CSRF Token установлен на попытке ${tries}`);
                    return true;
                }
            } catch (error) {
                console.error(`Try ${tries}: error getting CSRF - ${error}`);
            }
        }

        console.error(`Не удалось получить CSRF Token после ${maxTries} попыток`);
        return false;
    }

    public static login = (email: string, password: string) => {
        localStorage.setItem('email', email);
        this.password = password;
        const endpoint = this.baseEndpoint + 'signin';
        const request = RequestService.sendRequest(endpoint, "POST", {email, password});
        return RequestService.handleRequest(request, endpoint);
    }

    public static autoLogin() {
        const email = localStorage.getItem('email');
        if (email && this.password) {
            const endpoint = this.baseEndpoint + 'signin';
            const request = RequestService.sendRequest(endpoint, "POST", {email, password: this.password});
            return RequestService.handleRequest(request, endpoint);
        } else
            console.error('Нет данных для автоматической авторизации')
    }

    public static refresh = async () => {
        const endpoint = this.baseEndpoint + 'refresh';
        const request = RequestService.sendRequest(endpoint, "POST");
        return RequestService.handleRequest(request, endpoint);
    }

    public static registration = async (name: string, email: string, password: string) => {
        const endpoint = this.baseEndpoint + 'registration';
        const request = RequestService.sendRequest(endpoint, "POST", {name, email, password});
        return RequestService.handleRequest(request, endpoint);
    }

    public static logout = () => {
        localStorage.removeItem('email');
        this.password = null;
        const endpoint = this.baseEndpoint + 'logout';
        const request = RequestService.sendRequest(endpoint, "POST");
        return RequestService.handleRequest(request, endpoint);
    }
}
