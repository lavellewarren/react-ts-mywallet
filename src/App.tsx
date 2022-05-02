import GlobalStyles from "./styles/GlobalStyles"
import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components"
import dark from "./styles/themes/dark"
import Routes from "./routes"
import { useTheme } from "./context/ThemeContext"
import light from "./styles/themes/light"
import { AuthProvider } from "./context/AuthContext"

export default function App() {
    const { isDarkTheme } = useTheme()
    return (
        <ThemeProviderStyledComponents theme={isDarkTheme ? dark : light}>
            <AuthProvider>
                <GlobalStyles></GlobalStyles>
                <Routes></Routes>
            </AuthProvider>
        </ThemeProviderStyledComponents>
    )
}
