import {AuthenticationStore} from "./types.ts";
import {create} from "zustand";
import {AuthApi} from "./AuthApi.ts";

const useAuthentication = create<AuthenticationStore>((set, get) => ({
    isAuthenticated: false,
    login: (email: string, password: string) =>
        AuthApi.login(email, password).then(
            () => {
                set({isAuthenticated: true});
            },
            (reject) => {
                alert(reject);
            }),
    logout: () =>
        AuthApi.logout().then(
            () => {
                set({isAuthenticated: false});
            },
            (reject) => {
                alert(reject);
            }
        ),
    registrate: (name: string, email: string, password: string) =>
        AuthApi.registration(name, email, password).then(
            () => {
                get().login(email, password);
            },
            (reject) => {
                alert(reject);
            }
        ),
    getCsrf: () => AuthApi.getCsrf()
}));

export default useAuthentication;
