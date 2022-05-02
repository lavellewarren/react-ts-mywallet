import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { Anchor } from "./styles"

interface IProps {
    href: string
    children?: ReactNode
    onClick?: () => void
}

export default function MenuItem({
    href,
    children,
    onClick = () => {}
}: IProps) {
    return (
        <Link
            onClick={e => {
                onClick()
            }}
            to={href}
        >
            <Anchor>{children}</Anchor>
        </Link>
    )
}
