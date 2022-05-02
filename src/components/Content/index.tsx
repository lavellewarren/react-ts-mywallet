import { ReactNode } from "react"
import { Container } from "./styles"

interface IProps {
    children?: ReactNode
}

export default function Content({ children }: IProps) {
    return <Container>{children}</Container>
}
