export type AuthenticationStore = {
    user: User | null,
    login: (email: string, password: string) => Promise<any>,
    logout: () => void,
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

export type User = {
    name: string,
    email: string
}
