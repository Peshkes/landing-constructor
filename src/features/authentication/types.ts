export type AuthenticationStore = {
    user: User | null,
    login: (email: string, password: string) => Promise<void | User | null>,
    softLogin: () => Promise<void | User | null>,
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
    _id: string,
    name: string,
    email: string
}
