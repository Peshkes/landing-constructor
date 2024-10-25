import {AuthenticationStore} from "./types.ts";
import {create} from "zustand";

const useAuthentication = create<AuthenticationStore>((set) => ({
    isAuthenticated: false,
    login: () => set({isAuthenticated: true}),
    logout: () => set({isAuthenticated: false}),
}));

export default useAuthentication;
