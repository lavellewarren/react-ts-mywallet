import { InputHTMLAttributes } from "react"
import { Container } from "./styles"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: IProps) {
    return <Container {...rest} />
}
