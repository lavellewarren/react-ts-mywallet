import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...rest }: IProps) {
    return <Container {...rest}>{children}</Container>
}
