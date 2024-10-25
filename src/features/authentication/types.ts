export type AuthenticationStore = {
    isAuthenticated: boolean,
    login: () => void,
    logout: () => void,
}
