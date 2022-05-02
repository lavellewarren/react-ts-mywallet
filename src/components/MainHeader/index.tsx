import { useMemo } from "react"
import { useTheme } from "../../context/ThemeContext"
import emojis from "../../utils/emojis"
import Toggle from "../Toggle"
import {
    Container,
    Profile,
    Username,
    Wellcome,
    ToggleContainer
} from "./styles"

export default function MainHeader() {
    const { isDarkTheme, toggleTheme } = useTheme()

    const emoji = useMemo(() => {
        const index = Math.floor(Math.random() * emojis.length)
        return emojis[index]
    }, [])

    return (
        <Container>
            <ToggleContainer>
                <Toggle
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                ></Toggle>
            </ToggleContainer>
            <Profile>
                <Wellcome>Welcome, </Wellcome>
                <Username>Visitor {emoji}</Username>
            </Profile>
        </Container>
    )
}
