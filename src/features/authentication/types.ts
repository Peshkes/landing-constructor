export type AuthenticationStore = {
    isAuthenticated: boolean,
    login: (email: string, password: string) => void,
    logout: () => void,
    registrate: (name: string, email: string, password: string) => void,
    getCsrf: () => Promise<boolean>
}

export type AuthenticationFormData = {
    email: string,
    password: string
}

export type RegistrationFormData = {
    name: string,
    confirmPassword: string
} & AuthenticationFormData

export type csrfResponse = {
    csrfToken: string
}
