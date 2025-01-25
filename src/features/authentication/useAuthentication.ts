import {AuthenticationStore} from "./types.ts";
import {create} from "zustand";
import {AuthApi} from "./AuthApi.ts";

const useAuthentication = create<AuthenticationStore>((set) => ({
    user: null,
    login: (email: string, password: string) =>
        AuthApi.login(email, password)
            .then(
                (res) => {
                    if (res) set({user: res});
                }
            ),
    softLogin: () =>
        AuthApi.softLogin()
            .then(
                (res) => {
                    if (res) set({user: res});
                }
            ),
    logout: () =>
        AuthApi.logout()
            .then(
                () => set({user: null}),
                (reject) => reject
            )
            .catch((error) => error)
}));

export default useAuthentication;
