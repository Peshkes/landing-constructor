import {RequestService} from "../../shared/RequestService.ts";
import {AuthenticationFormData, csrfResponse, User} from "./types.ts";

export class AuthApi {
    private static baseEndpoint = 'auth';
    private static password: string | null = null;

    public static async getCsrf(): Promise<boolean> {
        const maxTries = 5;

        for (let tries = 1; tries <= maxTries; tries++) {
            try {
                const response = await RequestService.processRequest<void, csrfResponse>(this.baseEndpoint + '/csrf', "GET");

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
        const result = RequestService.processRequest<AuthenticationFormData, User>(this.baseEndpoint + '/signin', "POST", {email, password});
        localStorage.setItem('lastRefresh', new Date().toString());
        return result;
    }

    public static autoLogin() {
        const email = localStorage.getItem('email');
        if (email && this.password)
            return RequestService.processRequest<AuthenticationFormData, User>(this.baseEndpoint + '/signin', "POST", {email, password: this.password});
        else
            console.error('Нет данных для автоматической авторизации')
    }

    public static softLogin() {
        return RequestService.processRequest<void, User>(this.baseEndpoint + '/soft/signin', "POST");
    }

    public static refresh = async () => {
        return RequestService.processRequest(this.baseEndpoint + '/refresh', "POST");
    }

    public static registration = async (name: string, email: string, password: string, phone: string) => {
        return RequestService.processRequest(this.baseEndpoint + '/registration', "POST", {name, email, password, phone});
    }

    public static logout = () => {
        localStorage.removeItem('email');
        this.password = null;
        return RequestService.processRequest(this.baseEndpoint + '/logout', "POST");
    }
}
