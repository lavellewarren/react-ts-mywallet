import { Container } from "./styles"

interface IProps {
    title: string
    description: string
    footerText: string
    icon: string
}

export default function MessageBox({
    description,
    icon,
    footerText,
    title
}: IProps) {
    return (
        <Container>
            <header>
                <h1>
                    {title}
                    <img src={icon} alt={title} />
                </h1>
                <p>{description}</p>
            </header>
            <footer>
                <span>{footerText}</span>
            </footer>
        </Container>
    )
}
