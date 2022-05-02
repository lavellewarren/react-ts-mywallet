import { ReactNode } from "react"
import { Container, Controllers, TitleContainer } from "./styles"

interface IProps {
    title: string
    lineColor: string
    children?: ReactNode
}

export default function ContentHeader({ title, lineColor, children }: IProps) {
    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>{children}</Controllers>
        </Container>
    )
}
