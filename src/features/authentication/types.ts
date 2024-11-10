export type AuthenticationStore = {
    isAuthenticated: boolean,
    login: () => void,
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
