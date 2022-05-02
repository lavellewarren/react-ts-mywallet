import { createContext, ReactNode, useContext, useState } from "react"

interface IAuthContext {
    logged: boolean
    signIn(email: string, password: string): void
    signOut(): void
}

interface IProps {
    children?: ReactNode
}

const INITIAL_STATE: IAuthContext = {
    logged: true,
    signIn() {},
    signOut() {}
}

const authKey = "_minha_carteira_logged"

const AuthContent = createContext<IAuthContext>(INITIAL_STATE)

export function useAuth() {
    return useContext(AuthContent)
}

export function AuthProvider({ children }: IProps) {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = (localStorage.getItem(authKey) || false) as boolean
        return !!isLogged
    })

    function signIn(email: string, password: string) {
        localStorage.setItem(authKey, "true")
        setLogged(true)
    }

    function signOut() {
        localStorage.removeItem(authKey)
        setLogged(false)
    }

    return (
        <AuthContent.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContent.Provider>
    )
}
