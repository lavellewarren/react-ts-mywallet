import { ChangeEvent } from "react"
import { Container } from "./styles"

export interface ISelectOptions {
    value: string | number
    label: string
}

interface IProps {
    options: ISelectOptions[]
    defaultValue: string | number
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export default function SelectInput({
    options,
    defaultValue,
    onChange
}: IProps) {
    return (
        <Container>
            <select defaultValue={defaultValue} onChange={onChange}>
                {options.map((option, i) => (
                    <option key={`${i}_${option.value}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </Container>
    )
}
