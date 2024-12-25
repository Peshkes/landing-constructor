import {AuthApi} from "../features/authentication/AuthApi.ts";

export class RequestService {
    private static BASE_URL = import.meta.env.VITE_API_URL;
    private static globalHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
    };

    public static getGlobalHeader = (key: string) => {
        return this.globalHeaders[key];
    }

    public static setGlobalHeader = (key: string, value: string) => {
        this.globalHeaders[key] = value;
    };

    public static removeGlobalHeader = (key: string) => {
        delete this.globalHeaders[key];
    };

    public static async handleRequest<R>(requestPromise: Promise<R>, endpoint: string): Promise<R> {
        try {
            const response = await requestPromise;
            this.logSuccess(endpoint, response);
            return response;
        } catch (error) {
            this.logError(endpoint, error);
            return Promise.reject(error);
        }
    }

    public static sendRequest = async <D, R>(
        endpoint: string,
        method: string = 'GET',
        data?: D,
        signal?: AbortSignal,
        customHeaders: Record<string, string> = {}
    ): Promise<R> => {
        const headers = {
            ...this.globalHeaders,
            ...customHeaders,
        };

        try {
            console.log(headers)
            const response = await fetch(`${this.BASE_URL}/${endpoint}`, {
                method,
                headers,
                body: data ? JSON.stringify(data) : undefined,
                signal,
                credentials: 'include',
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${error.message}`);
            }

            if (response.status === 204 || response.headers.get('Content-Length') === '0') {
                return null as unknown as R;
            }

            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            }

            return (await response.text()) as unknown as R;
        } catch (error: any) {
            if (error.name === 'AbortError') console.error(`Request to ${endpoint} was aborted`);
            throw error;
        }
    }

    public static sendSecureRequest = async <D, R>(
        endpoint: string,
        method: string = 'GET',
        data?: D,
        signal?: AbortSignal,
        customHeaders: Record<string, string> = {}
    ): Promise<R> => {
        try {
            return await this.sendRequest<D, R>(endpoint, method, data, signal, customHeaders);
        } catch (error: any) {
            if (error.status === 401 && error.message.includes('Access token is not valid')) {
                try {
                    await AuthApi.refresh();
                    return await this.sendRequest<D, R>(endpoint, method, data, signal, customHeaders);
                } catch (refreshError: any) {
                    if (refreshError.status === 401 && refreshError.message.includes('Refresh token is not valid')) {
                        try {
                            await AuthApi.autoLogin();
                            return await this.sendRequest<D, R>(endpoint, method, data, signal, customHeaders);
                        } catch (signInError) {
                            console.error('Sign-in failed:', signInError);
                            throw signInError;
                        }
                    } else {
                        console.error('Refresh token failed:', refreshError);
                        throw refreshError;
                    }
                }
            } else {
                throw error;
            }
        }
    }

    public static processRequest = async <D, R>(
        endpoint: string,
        method: string = 'GET',
        data?: D,
        signal?: AbortSignal,
        customHeaders: Record<string, string> = {}
    ): Promise<R> => {
        const requestPromise = this.sendRequest<D, R>(endpoint, method, data, signal, customHeaders);
        return this.handleRequest<R>(requestPromise, endpoint);
    }

    public static processSecureRequest = async <D, R>(
        endpoint: string,
        method: string = 'GET',
        data?: D,
        signal?: AbortSignal,
        customHeaders: Record<string, string> = {}
    ): Promise<R> => {
        const requestPromise = this.sendSecureRequest<D, R>(endpoint, method, data, signal, customHeaders);
        return this.handleRequest<R>(requestPromise, endpoint);
    }

    private static logSuccess(endpoint: string, response: any): void {
        console.log(`Request to ${endpoint} was successful:`, response);
    }

    private static logError(endpoint: string, error: any): void {
        console.error(`Request to ${endpoint} failed:`, error);
    }
}
