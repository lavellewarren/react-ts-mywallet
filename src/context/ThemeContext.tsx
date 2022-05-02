import { createContext, ReactNode, useContext, useState } from "react"

interface IProps {
    children?: ReactNode
}

interface IThemeProvider {
    isDarkTheme: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<IThemeProvider>({
    isDarkTheme: true,
    toggleTheme() {}
})

const themeKey = "_minha_carteira_is_dark_theme"

export function useTheme() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }: IProps) {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getLocalTheme)

    const toggleTheme = () => {
        const newIsDarkTheme = isDarkTheme ? false : true
        setIsDarkTheme(newIsDarkTheme)
        localStorage.setItem(themeKey, JSON.stringify(newIsDarkTheme))
    }

    function getLocalTheme() {
        return JSON.parse(localStorage.getItem(themeKey) || "true") as boolean
    }

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
