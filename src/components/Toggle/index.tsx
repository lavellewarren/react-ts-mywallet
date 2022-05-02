import { Container, ToggleLabel, ToggleSelector } from "./styles"

interface IProps {
    labelLeft?: string
    labelRight?: string
    checked: boolean
    onChange: () => void
}

export default function Toggle({
    checked,
    onChange,
    labelLeft,
    labelRight
}: IProps) {
    return (
        <Container>
            <ToggleLabel>{labelLeft}</ToggleLabel>
            <ToggleSelector
                checked={checked}
                onChange={onChange}
                uncheckedIcon={false}
                checkedIcon={false}
            ></ToggleSelector>
            <ToggleLabel>{labelRight}</ToggleLabel>
        </Container>
    )
}
